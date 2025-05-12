export default function Footer() {
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
              <a class="on" href="index.html">Home</a>
            </li>
            <li>
              <a href="profile.html">Profile</a>
            </li>
            <li>
              <a href="cv.html">CV</a>
            </li>
            <li>
              <a href="contact.html">Contact Me</a>
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