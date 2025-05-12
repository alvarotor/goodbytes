import { useLocation } from "preact-iso";
import { useTranslation } from "react-i18next";
import type { JSX } from "preact";

export function Header() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const location = useLocation();
  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  // Custom Link component with proper type definitions
  interface NavLinkProps {
    href: string;
    className?: string;
    children: JSX.Element | string | (JSX.Element | string)[];
  }

  const NavLink = ({ href, className, children }: NavLinkProps) => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      location.route(href);
    };
    
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  };

  return (
    <div id="header">
      <div class="inner">
        <h1>
          <NavLink href="/">Alvaro Torres</NavLink>
        </h1>
        <ul id="flags">
          <li class="en">
            <a 
              className={i18n.language === 'en' ? 'on' : ''} 
              onClick={() => changeLanguage('en')}
            >
              EN
            </a>
          </li>
          <li class="es">
            <a 
              className={i18n.language === 'es' ? 'on' : ''} 
              onClick={() => changeLanguage('es')}
            >
              ES
            </a>
          </li>
        </ul>
        <ul id="flags_link">
          <li>
            <a
              href="https://www.linkedin.com/in/alvarotorresp"
              target="_blank"
              class="smallest-link"
            >
              <img src="content/linkedin_small.png" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alvarotor"
              target="_blank"
              class="smallest-link"
            >
              <img src="content/GitHub_small.png" alt="GitHub" />
            </a>
          </li>
        </ul>
        <ul class="nav">
          <li>
            <NavLink className="on" href="/">{t("home")}</NavLink>
          </li>
          <li>
            <NavLink href="/profile">{t("profile")}</NavLink>
          </li>
          <li>
            <NavLink href="/cv">{t("cv")}</NavLink>
          </li>
          <li>
            <NavLink href="/contact">{t("contact")}</NavLink>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  );
}