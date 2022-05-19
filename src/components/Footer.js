import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-area" id="contact">
      <div className="container social">
        <div className="social text-center">
          <a href="https://github.com/jcarait" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jonathan-florido-carait-107912216/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:jonocdev@gmail.com">
            <i className="fas fa-at"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
