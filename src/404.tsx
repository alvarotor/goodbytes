import { Header } from "./header"
import Footer from "./footer"
import { useSeo } from "./util/useSeo"

export default function routes404() {
  useSeo({
    title: '404 - Page Not Found | Alvaro Torres',
    description: 'The page you are looking for does not exist. Visit the homepage to explore the portfolio of Alvaro Torres, Senior Software Architect.',
    noIndex: true,
  });

  return (
    <>
      <Header />
      <div class="innerbg">
        <div class="wrap">
          <h1>404 - <span class="red">Page Not Found</span></h1>
        </div>
      </div>
      <div class="wrap">
        <div id="content">
          <p>Sorry, the page you are looking for does not exist or has been moved.</p>
          <p>
            <a href="/">Return to Homepage</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}