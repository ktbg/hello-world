import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <h5 className="footer-name">Katie Boates-Goudreau</h5>
        <p className="footer-email">hello@allaboatesgoudreau.com</p>
      </div>
      <div className="footer-right">
        <div className="footer-socials">
          <Link to="/">LinkedIn</Link>
          <Link to="/">GitHub</Link>
          <Link to="/">Instagram</Link>
        </div>
        <div className="copyright">
          <p className="copyright-text">
            Katie Boates-Goudreau &copy;2021. All rights reserved. Made with
            &hearts; by Katie Boates-Goudreau
          </p>
        </div>
        <div className="licenses">
          <Link className="license-link footer-left-link" to="#">
            Cookie Policy
          </Link>
          <Link className="license-link footer-right-link" to="#">
            Unsplash
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
