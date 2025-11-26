import { Header } from "./header";
import Footer from "./footer";
import fs from 'fs'; // Used by getStaticProps (server/build time)
import path from 'path'; // Used by getStaticProps (server/build time)
import { useState, useEffect } from 'preact/hooks';
import { useTranslation } from "react-i18next";
import { useSeo, seoConfigs } from "./util/useSeo";

// getStaticProps remains for Next.js pages/cv.tsx to use
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'cv.html');
  const htmlContent = fs.readFileSync(filePath, 'utf8');
  return {
    props: {
      htmlContent,
    },
  };
}

export default function Cv({ htmlContent: initialHtmlContent }: { htmlContent?: string }) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  useSeo(seoConfigs.cv(lang));

  const [currentHtmlContent, setCurrentHtmlContent] = useState(initialHtmlContent);
  const [isLoading, setIsLoading] = useState(!initialHtmlContent);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only fetch if initialHtmlContent was not provided (client-side navigation via preact-iso)
    if (initialHtmlContent === undefined) {
      setIsLoading(true);
      fetch('/cv.html') // cv.html should be in /public and accessible at the root
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          setCurrentHtmlContent(data);
          setIsLoading(false);
        })
        .catch(fetchError => {
          console.error("Failed to load CV HTML client-side:", fetchError);
          setError("Failed to load CV content. Please try again later.");
          setIsLoading(false);
        });
    } else {
      // If content was provided, ensure loading is false.
      // And update currentHtmlContent if initialHtmlContent changes (though unlikely for this setup)
      setCurrentHtmlContent(initialHtmlContent);
      if (isLoading) {
        setIsLoading(false);
      }
    }
  }, [initialHtmlContent]); // Re-run if initialHtmlContent changes

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="container" style={{ textAlign: 'center', padding: '20px' }}>
          <p>Loading CV...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div className="container" style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
          <p>{error}</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div 
        className="container" 
        style={{ display: 'flex', justifyContent: 'center' }} 
      >
        <div style={{ maxWidth: '480px', width: '100%' }} dangerouslySetInnerHTML={{ __html: currentHtmlContent || "" }} />
      </div>
      <Footer />
    </>
  );
}
