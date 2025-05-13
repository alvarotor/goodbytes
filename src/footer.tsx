import { NavLink } from "./util/navLink"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  return (
      <>
        <div class="clear"></div>
        <div class="gotop">
          <a href="#top">Go to Top</a>
        </div>
        <div id="footer">
          <div class="inner">
            <ul class="nav">
              <li>
              <NavLink href="/">{t("home")}</NavLink>
              </li>
              <li>
                <a href="profile.html">{t("profile")}</a>
              </li>
              <li>
                <a href="cv.html">{t("cv")}</a>
              </li>
              <li>
                <a href="contact.html">{t("contact")}</a>
              </li>
            </ul>
            <span class="soc-icons">
              <a href="https://www.linkedin.com/in/alvarotorresp" target="_blank">
                <img src="content/linkedin.jpg" alt="linkedin alvaro" />
              </a>
            </span>
            <p class="copyright">Copyright © Alvaro Torres</p>
            <div class="clear"></div>
          </div>
        </div>
      </>
  );
}