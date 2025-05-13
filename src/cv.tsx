import { Header } from "./header";
import Footer from "./footer";
import { useTranslation } from "react-i18next";

export default function Cv() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div class="wrap">
        <div id="content">
          <h2>
            <span class="red">{t("cv.title")}</span>
          </h2>
          <p>
            {t("cv.downloadPrompt")}{" "}
            <a href="content/Alvaro_Torres_CV.pdf" target="_blank">
              Alvaro_Torres_CV.pdf
            </a>
          </p>
          <p>
            {t("cv.linkedinPrompt")}{" "}
            <a
              href="https://www.linkedin.com/in/alvarotorresp"
              target="_blank"
            >
              {t("cv.linkedinLink")}
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
