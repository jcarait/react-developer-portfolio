import './Footer.scss';

const Footer = () => {
  return (
    <footer class="footer-area" id="contact">
      <div class="container">
        <div calss="d-flex flex-row justify-content-center flex-wrap">
          <div class="social text-center">
            <h5 class="text-uppercase">Contact</h5>
            <a
              href="https://github.com/jcarait"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-florido-carait-107912216/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:jonocdev@gmail.com">
              <i class="fas fa-at"></i>
            </a>
          </div>
          <div class="copyrights text-center">
            <p class="para">
              <a href="#"></a>
            </p>
            <p class="para">
              <a href="http://www.freepik.com">
                Banner avatar image is designed by studiogstock / Freepik
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
