import { useEffect } from 'preact/hooks';

interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const BASE_URL = 'https://goodbytes.net';
const DEFAULT_IMAGE = `${BASE_URL}/content/alvaro.png`;
const SITE_NAME = 'Alvaro Torres - Professional Developer';

export function useSeo(config: SeoConfig) {
  useEffect(() => {
    // Update document title
    document.title = config.title;

    // Helper to update or create meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Basic meta tags
    setMetaTag('description', config.description);

    // Robots
    if (config.noIndex) {
      setMetaTag('robots', 'noindex, follow');
    } else {
      setMetaTag('robots', 'index, follow');
    }

    // Canonical URL
    if (config.canonical) {
      setLinkTag('canonical', config.canonical);
    }

    // Open Graph tags
    setMetaTag('og:title', config.ogTitle || config.title, true);
    setMetaTag('og:description', config.ogDescription || config.description, true);
    setMetaTag('og:image', config.ogImage || DEFAULT_IMAGE, true);
    setMetaTag('og:type', config.ogType || 'website', true);
    setMetaTag('og:site_name', SITE_NAME, true);
    if (config.canonical) {
      setMetaTag('og:url', config.canonical, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:title', config.twitterTitle || config.ogTitle || config.title);
    setMetaTag('twitter:description', config.twitterDescription || config.ogDescription || config.description);

    // Structured data
    if (config.structuredData) {
      let script = document.querySelector('script[data-seo-structured]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-structured', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(config.structuredData);
    }

    // Cleanup function - restore defaults on unmount (optional)
    return () => {
      // Optionally reset to defaults when component unmounts
    };
  }, [config.title, config.description, config.canonical, config.ogTitle, config.ogDescription, config.ogImage, config.ogType, config.twitterTitle, config.twitterDescription, config.noIndex, config.structuredData]);
}

// Pre-configured SEO settings for each page
export const seoConfigs = {
  home: (lang: string): SeoConfig => {
    const configs: Record<string, SeoConfig> = {
      en: {
        title: 'Alvaro Torres - Senior Software Architect & Full Stack Developer | 20+ Years Experience',
        description: 'Senior Software Architect with 20+ years of experience specializing in full-stack development, cloud architecture, microservices, AI processes, and mobile apps. Expertise in Golang, React, Node.js, AWS, and Docker.',
        canonical: BASE_URL + '/',
        ogType: 'profile',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Alvaro Torres",
            "jobTitle": "Senior Software Architect",
            "url": BASE_URL,
            "image": DEFAULT_IMAGE,
            "sameAs": [
              "https://www.linkedin.com/in/alvarotorresp",
              "https://github.com/alvarotor"
            ]
          }
        }
      },
      es: {
        title: 'Alvaro Torres - Arquitecto de Software Senior & Desarrollador Full Stack | +20 Años de Experiencia',
        description: 'Arquitecto de Software Senior con más de 20 años de experiencia especializado en desarrollo full-stack, arquitectura cloud, microservicios, procesos de IA y aplicaciones móviles. Experto en Golang, React, Node.js, AWS y Docker.',
        canonical: BASE_URL + '/es/',
        ogType: 'profile',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "mainEntity": {
            "@type": "Person",
            "name": "Alvaro Torres",
            "jobTitle": "Arquitecto de Software Senior",
            "url": BASE_URL,
            "image": DEFAULT_IMAGE,
            "sameAs": [
              "https://www.linkedin.com/in/alvarotorresp",
              "https://github.com/alvarotor"
            ]
          }
        }
      }
    };
    return configs[lang] || configs.en;
  },

  profile: (lang: string): SeoConfig => {
    const configs: Record<string, SeoConfig> = {
      en: {
        title: 'Professional Profile - Alvaro Torres | Software Architect & Full Stack Developer',
        description: 'Learn about Alvaro Torres, a passionate software architect with 20+ years of experience in full-stack development, mobile apps, cloud services, and AI processes. Problem solver with expertise across multiple industries.',
        canonical: BASE_URL + '/profile',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Professional Profile - Alvaro Torres",
          "description": "Professional profile and background of Alvaro Torres, Senior Software Architect",
          "mainEntity": {
            "@type": "Person",
            "name": "Alvaro Torres",
            "jobTitle": "Senior Software Architect",
            "description": "20+ years of experience in software development",
            "knowsAbout": ["Software Architecture", "Full Stack Development", "Mobile Development", "Cloud Computing", "AI Processes"]
          }
        }
      },
      es: {
        title: 'Perfil Profesional - Alvaro Torres | Arquitecto de Software & Desarrollador Full Stack',
        description: 'Conoce a Alvaro Torres, un arquitecto de software apasionado con más de 20 años de experiencia en desarrollo full-stack, aplicaciones móviles, servicios cloud y procesos de IA.',
        canonical: BASE_URL + '/es/profile',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Perfil Profesional - Alvaro Torres",
          "description": "Perfil profesional y trayectoria de Alvaro Torres, Arquitecto de Software Senior",
          "mainEntity": {
            "@type": "Person",
            "name": "Alvaro Torres",
            "jobTitle": "Arquitecto de Software Senior",
            "description": "Más de 20 años de experiencia en desarrollo de software"
          }
        }
      }
    };
    return configs[lang] || configs.en;
  },

  contact: (lang: string): SeoConfig => {
    const configs: Record<string, SeoConfig> = {
      en: {
        title: 'Contact Alvaro Torres - Hire a Senior Software Architect & Full Stack Developer',
        description: 'Get in touch with Alvaro Torres for software development projects, consulting, or collaboration. Based in Valencia, Spain. Available for remote work worldwide.',
        canonical: BASE_URL + '/contact',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Alvaro Torres",
          "description": "Contact page to reach Alvaro Torres for software development inquiries",
          "mainEntity": {
            "@type": "Person",
            "name": "Alvaro Torres",
            "email": "goodbytes23@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Valencia",
              "addressCountry": "Spain"
            }
          }
        }
      },
      es: {
        title: 'Contactar a Alvaro Torres - Contratar Arquitecto de Software Senior & Desarrollador Full Stack',
        description: 'Ponte en contacto con Alvaro Torres para proyectos de desarrollo de software, consultoría o colaboración. Ubicado en Valencia, España. Disponible para trabajo remoto a nivel mundial.',
        canonical: BASE_URL + '/es/contact',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contactar a Alvaro Torres",
          "description": "Página de contacto para comunicarse con Alvaro Torres",
          "mainEntity": {
            "@type": "Person",
            "name": "Alvaro Torres",
            "email": "goodbytes23@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Valencia",
              "addressCountry": "España"
            }
          }
        }
      }
    };
    return configs[lang] || configs.en;
  },

  cv: (lang: string): SeoConfig => {
    const configs: Record<string, SeoConfig> = {
      en: {
        title: 'CV / Resume - Alvaro Torres | Senior Software Architect | 20+ Years Experience',
        description: 'View the professional CV and resume of Alvaro Torres, Senior Software Architect with 20+ years of experience in Golang, React, Node.js, cloud architecture, and enterprise software development.',
        canonical: BASE_URL + '/cv',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "CV - Alvaro Torres",
          "description": "Professional resume and curriculum vitae of Alvaro Torres",
          "mainEntity": {
            "@type": "Person",
            "name": "Alvaro Torres",
            "jobTitle": "Senior Software Architect",
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "degree",
              "educationalLevel": "Master"
            }
          }
        }
      },
      es: {
        title: 'CV / Curriculum - Alvaro Torres | Arquitecto de Software Senior | +20 Años de Experiencia',
        description: 'Ver el CV profesional de Alvaro Torres, Arquitecto de Software Senior con más de 20 años de experiencia en Golang, React, Node.js, arquitectura cloud y desarrollo de software empresarial.',
        canonical: BASE_URL + '/cv',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "CV - Alvaro Torres",
          "description": "Curriculum vitae profesional de Alvaro Torres"
        }
      }
    };
    return configs[lang] || configs.en;
  }
};
