import { NavLink } from "./util/navLink";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "preact/hooks";

// Helper function to get the current path
const getCurrentPath = (): string => {
  return typeof window !== "undefined" ? window.location.pathname : "/";
};

// Helper function to normalize paths for comparison
const normalizePath = (path: string): string => {
  // Remove trailing slash unless it's the root path
  let normalized = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  // Ensure leading slash
  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }
  return normalized;
};

export function Header() {
  const { t, i18n } = useTranslation();
  const [currentPath, setCurrentPath] = useState(getCurrentPath());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener("popstate", handleLocationChange);
    // Assuming a custom event "locationchange" is dispatched by your router on navigation
    window.addEventListener("locationchange", handleLocationChange);

    // Initial check in case the component mounts after the initial path is set
    handleLocationChange();

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("locationchange", handleLocationChange);
    };
  }, []);

  // Function to determine if a NavLink is active
  const isActive = (href: string) => {
    return normalizePath(currentPath) === normalizePath(href);
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
              onClick={() => i18n.changeLanguage('en')}
            >
              {t("enLang")}
            </a>
          </li>
          <li class="es">
            <a 
              className={i18n.language === 'es' ? 'on' : ''} 
              onClick={() => i18n.changeLanguage('es')}
            >
              {t("esLang")}
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
              <img src="content/linkedin_small.png" alt={t("linkedinAlt")} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/alvarotor"
              target="_blank"
              class="smallest-link"
            >
              <img src="content/GitHub_small.png" alt={t("githubAlt")} />
            </a>
          </li>
        </ul>
        <ul class="nav">
          <li>
            <NavLink href="/" className={isActive("/") ? "on" : ""}>{t("home")}</NavLink>
          </li>
          <li>
            <NavLink href="profile" className={isActive("profile") ? "on" : ""}>{t("profile")}</NavLink>
          </li>
          <li>
            <NavLink href="cv" className={isActive("cv") ? "on" : ""}>{t("cv")}</NavLink>
          </li>
          <li>
            <NavLink href="contact" className={isActive("contact") ? "on" : ""}>{t("contact")}</NavLink>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>
  );
}