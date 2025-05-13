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



        </div>
      </div>
      <Footer />
    </>
  );
}
