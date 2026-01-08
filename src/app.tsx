import { Header } from "./header"
import Footer from "./footer"
import { useTranslation } from "react-i18next";
import { NavLink } from "./util/navLink";
import { useSeo, seoConfigs } from "./util/useSeo";

export default function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  useSeo(seoConfigs.home(lang));
  return (
    <>
      <Header />
      <div id="teaser">
        <div class="inner">
          <div>
            <img alt="Alvaro Torres" class="alvaro c1" src="content/alvaro.png" />
            <h1>
              <span class="red">{t("app.title.softwareArchitect")}</span>
              <br />
              {t("app.title.webDeveloper")}
              <br />
              <span class="red">{t("app.title.mobileApps")}</span>
              <br />
               {t("app.title.fullStackEngineer")}
               <br />
               <span class="red">{t("app.title.aiProcesses")}</span>
               <br />
               {t("app.title.digitalTransformation")}
             </h1>
            <p style="width: 75%">
              <strong>
                {t("app.teaser.keywords")}
              </strong>
              <br />
              {t("app.teaser.contactIntro")}{" "}
              <NavLink href="/contact">{t("contact")}</NavLink>.
            </p>
            <p>
              <strong>{t("app.teaser.experience")}</strong> {t("app.teaser.experienceYears")}
              {" "} / {" "}
              <strong>{t("app.teaser.projects")}</strong> {t("app.teaser.projectsCount")}
              {" "} / {" "}
              <strong>{t("app.teaser.linesOfCode")}</strong> {t("app.teaser.linesOfCodeCount")}
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/alvarotorresp"
                target="_blank"
                class="small-link"
              >
                <img src="content/linkedin_small.png" alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/alvarotor"
                target="_blank"
                class="small-link"
              >
                <img src="content/GitHub_small.png" alt="GitHub" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div id="content">
          <h2>
            <span class="red">{t("app.content.languagesTitlePart1")}</span> {t("app.content.languagesTitlePart2")}
          </h2>
          <ul id="logoshome">
            <li>
              <img
                alt="chatgpt"
                height="40"
                src="content/chatgpt.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="claude"
                height="40"
                src="content/claude.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="n8n"
                height="40"
                src="content/n8n.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="langchain"
                height="40"
                src="content/langchain.png"
                width="80"
              />
            </li>
            <li>
              <img alt="golang" height="40" src="content/golang.png" width="80" />
            </li>
            <li>
              <img alt="node" height="40" src="content/node.png" width="80" />
            </li>
            <li>
              <img
                alt="csharp"
                height="40"
                src="content/logo-csharp.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="angularjs 2"
                height="40"
                src="content/angular2.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="reactjs"
                height="40"
                src="content/logo-react.jpg"
                width="80"
              />
            </li>
            <li>
              <img alt="docker" height="40" src="content/docker.gif" width="80" />
            </li>
            <li>
              <img
                alt="android"
                height="40"
                src="content/logo-android.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="nativescript"
                height="40"
                src="content/nativescript.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="serverless"
                height="40"
                src="content/serverless.png"
                width="80"
              />
            </li>
            <li>
              <img alt="aws" height="40" src="content/aws.png" width="80" />
            </li>
            <li>
              <img alt="azure" height="40" src="content/azure.png" width="80" />
            </li>
            <li>
              <img
                alt="postgres"
                height="40"
                src="content/postgres.png"
                width="80"
              />
            </li>
            <li>
              <img alt="redux" height="40" src="content/redux.png" width="80" />
            </li>
            <li>
              <img
                alt="express"
                height="40"
                src="content/express.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="mongodb"
                height="40"
                src="content/mongodb.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="firebase"
                height="40"
                src="content/firebase.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="typescript"
                height="40"
                src="content/typescript.png"
                width="80"
              />
            </li>
            <li>
              <img alt="sass" height="40" src="content/sass.png" width="80" />
            </li>
            <li>
              <img alt="vuejs" height="40" src="content/vuejs.jpg" width="80" />
            </li>
            <li>
              <img
                alt="webpack"
                height="40"
                src="content/webpack.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="xamarin"
                height="40"
                src="content/xamarin.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="aspnet"
                height="40"
                src="content/logo-aspnet.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="aspnetmvc"
                height="40"
                src="content/logo-aspnetmvc.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="webapi"
                height="40"
                src="content/logo-webapi.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="css3"
                height="40"
                src="content/logo-css3.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="html5"
                height="40"
                src="content/logo-html5.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="javascript"
                height="40"
                src="content/logo-javascript.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="jquery"
                height="40"
                src="content/logo-jquery.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="microsoft"
                height="40"
                src="content/logo-microsoft.jpg"
                width="80"
              />
            </li>
                        <li>
              <img
                alt="sqlserver"
                height="40"
                src="content/logo-sqlserver.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="tsql"
                height="40"
                src="content/logo-tsql.jpg"
                width="80"
              />
            </li>
            <li>
              <img
                alt="react native"
                height="40"
                src="content/react-native.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="redis"
                height="40"
                src="content/redis.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="traefik"
                height="40"
                src="content/traefik_new.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="github actions"
                height="40"
                src="content/github-actions.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="swagger"
                height="40"
                src="content/swagger.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="graphql"
                height="40"
                src="content/graphql.png"
                width="80"
              />
            </li>
            <li>
              <img
                alt="ollama"
                height="40"
                src="content/ollama.png"
                width="80"
              />
            </li>
          </ul>
          <div class="clear">&nbsp;</div>
          <h2>
            <span class="red">{t("app.content.softwareArchitectTitlePart1")},</span>
            {" "}{t("app.content.softwareArchitectTitlePart2")}
          </h2>
          {t("app.content.professionalDeveloperIntro")} 
          {t("app.content.professionalProgrammerExperience")}
          <p>
            {t("app.content.bilingualNote")}
          </p>
          <h2>
            {t("app.content.expertiseTitlePart1")} <span class="red">{t("app.content.expertiseTitlePart2")}</span>
          </h2>
          <ul class="twocolumns">
            <li>{t("app.expertise.websites")}</li>
            <li>{t("app.expertise.backEnd")}</li>
            <li>{t("app.expertise.frontEnd")}</li>
            <li>{t("app.expertise.apis")}</li>
            <li>{t("app.expertise.androidApps")}</li>
            <li>{t("app.expertise.hybridNativeApps")}</li>
            <li>{t("app.expertise.services")}</li>
            <li>{t("app.expertise.libraries")}</li>
            <li>{t("app.expertise.windowsDesktopApps")}</li>
            <li>{t("app.expertise.seo")}</li>
            <li>{t("app.expertise.databases")}</li>
            <li>{t("app.expertise.techConsultancy")}</li>
            <li>{t("app.expertise.internetPresence")}</li>
            <li>{t("app.expertise.design")}</li>
            <li>{t("app.expertise.architecture")}</li>
            <li>{t("app.expertise.engineering")}</li>
            <li>{t("app.expertise.projectManagement")}</li>
            <li>{t("app.expertise.projectPlanning")}</li>
            <li>{t("app.expertise.customerManagement")}</li>
            <li>{t("app.expertise.aiProcesses")}</li>
            <li>{t("app.expertise.etc")}</li>
          </ul>
          <p>
            {t("app.content.profilePrompt")}{" "}
            <NavLink href="profile">{t("app.content.profilePromptLink")}</NavLink>{" "}
            {t("app.content.profilePromptSuffix")}
          </p>
        </div>
        <div id="sidebar">
          <div class="testimonial">
            <h3>
              {t("app.sidebar.quotesTitlePart1")}{" "}
              <span class="red">{t("app.sidebar.quotesTitlePart2")}</span>
            </h3>
            <p class="quote">
              {t("app.sidebar.quote1")}
            </p>
            <p class="author">
              {t("app.sidebar.author1")}
            </p>
            <p class="quote">
              {t("app.sidebar.quote2")}
            </p>
            <p class="author">
              {t("app.sidebar.author2")}
            </p>
            <p class="quote">{t("app.sidebar.quote3")}</p>
            <p class="author">
              {t("app.sidebar.author3")}
            </p>
            <p class="quote">
              {t("app.sidebar.quote4")}
            </p>
            <p class="author">{t("app.sidebar.author4")}</p>
            <p class="quote">
              {t("app.sidebar.quote5")}
            </p>
            <p class="author">
              {t("app.sidebar.author5")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
