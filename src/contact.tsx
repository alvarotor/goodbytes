 import { useState, useEffect } from "preact/hooks";
 import { Header } from "./header";
 import Footer from "./footer";
 import { useTranslation } from "react-i18next";
 import { useSeo, seoConfigs } from "./util/useSeo";

const FORMSUBMIT_URL = 'https://formsubmit.co/goodbytes23@gmail.com';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  useSeo(seoConfigs.contact(lang));

  // Check if redirected back from successful form submission
  const urlParams = new URLSearchParams(window.location.search);
  const isSuccessRedirect = urlParams.get('success') === 'true';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted] = useState(isSuccessRedirect);

  // Clean up URL when showing success state
  useEffect(() => {
    if (isSuccessRedirect) {
      // Clean up the URL by removing the success parameter
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }
  }, [isSuccessRedirect]);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a temporary form for submission
    const tempForm = document.createElement('form');
    tempForm.method = 'POST';
    tempForm.action = FORMSUBMIT_URL;
    tempForm.style.display = 'none';

    // Add form fields
    const fields = [
      { name: 'name', value: formData.name },
      { name: 'email', value: formData.email },
      { name: 'company', value: formData.company },
      { name: 'message', value: formData.message },
      { name: '_subject', value: 'Nuevo mensaje de contacto - Goodbytes' },
      { name: '_next', value: window.location.origin + '/contact?success=true' }
    ];

    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value;
      tempForm.appendChild(input);
    });

    // Add form to body and submit
    document.body.appendChild(tempForm);
    tempForm.submit();

    // Note: Form will redirect to formsubmit.co and then back to /contact?success=true
  };

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  if (isSubmitted) {
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
            <div class="form-success">
              <div class="success-icon">✅</div>
              <h3>{t("contact.successTitle")}</h3>
              <p>{t("contact.successMessage")}</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

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
             onSubmit={handleSubmit}
           >
             <fieldset>
               <label for="name">{t("contact.name")}</label>
               <br />
               <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
             </fieldset>
             <fieldset>
               <label for="email">{t("contact.email")}</label>
               <br />
               <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
             </fieldset>
             <fieldset>
               <label for="company">{t("contact.company")}</label>
               <br />
               <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} />
             </fieldset>
             <fieldset>
               <label for="message">{t("contact.message")}</label>
               <br />
               <textarea id="message" name="message" rows={8} value={formData.message} onChange={handleChange} required></textarea>
             </fieldset>
             <button class="btn" type="submit" disabled={isSubmitting}>
               {isSubmitting ? t("contact.sending") : t("contact.send")}
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