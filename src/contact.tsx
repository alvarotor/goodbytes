import { Header } from "./header";
import Footer from "./footer";
import { useTranslation } from "react-i18next";
import { useSeo, seoConfigs } from "./util/useSeo";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  useSeo(seoConfigs.contact(lang));
  return (
    <>
      <Header />
      <div class="innerbg">
        <div class="wrap">
          <h1>{t("contact.title")}</h1>
        </div>
      </div>
      <div class="wrap">
        <div id="content">
          <p>{t("contact.intro")}</p>
          <link rel="stylesheet" href="content/form.css" media="all" />
          <form
            id="contact"
            method="post"
            action="mailto:goodbytes23@gmail.com"
            enctype="text/plain"
          >
            <fieldset>
              <label for="name">{t("contact.name")}</label>
              <br />
              <input id="name" name="name" type="text" value="" />
            </fieldset>
            <fieldset>
              <label for="email">{t("contact.email")}</label>
              <br />
              <input id="email" name="email" type="email" value="" />
            </fieldset>
            <fieldset>
              <label for="company">{t("contact.company")}</label>
              <br />
              <input id="company" name="company" type="text" value="" />
            </fieldset>
            <fieldset>
              <label for="message">{t("contact.message")}</label>
              <br />
              <textarea id="message" name="message" rows={8}></textarea>
            </fieldset>
            <button class="btn" type="submit">
              {t("contact.send")}
            </button>
          </form>
        </div>
        <div id="sidebar">
          <div class="contact-info">
            <h2>{t("contact.details")}</h2>
            <p>
              <strong>{t("contact.emailLabel")}:</strong>
            </p>
            <p>goodbytes23 (@) gmail.com</p>
            <p>
              <strong>{t("contact.city")}:</strong>
            </p>
            <p>
              Valencia
              <br />
              (Spain)
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}