import { Header } from "./header";
import Footer from "./footer";
import { useTranslation } from "react-i18next";
import { useSeo, seoConfigs } from "./util/useSeo";

export default function Profile() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  useSeo(seoConfigs.profile(lang));
  return (
    <>
      <Header />
      <div class="innerbg">
        <div class="wrap">
          <h1>
            {t("profile.title.Professional")} <span class="red"> {t("profile.title.Profile")}</span>
          </h1>
        </div>
      </div>

      <div class="wrap">
        <div id="content">
          <p>{t("profile.intro")}</p>
          <p>{t("profile.description1")}</p>
          <p>{t("profile.description2")}</p>
          <p>{t("profile.description3")}</p>
          <p>{t("profile.description4")}</p>
          <p>{t("profile.signature")}</p>
          <p>Alvaro Torres</p>
        </div>
        <div id="sidebar">
          <div class="sideblock">
            <h3>
              <span class="red">{t("profile.strongPointsTitle")}</span>
              {" "} {t("profile.strongPointsSubtitle")}
            </h3>
            <ul>
              <li class="first">{t("profile.strongPoint1")}</li>
              <li>{t("profile.strongPoint2")}</li>
              <li>{t("profile.strongPoint3")}</li>
              <li>{t("profile.strongPoint4")}</li>
              <li>{t("profile.strongPoint5")}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}