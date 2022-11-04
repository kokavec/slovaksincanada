import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.png";
import insituteLogo from "../img/institute-logo-2-fianl.png";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";
// import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <img
                  src={logo}
                  alt="Slováci v Kanade"
                  style={{ height: "10em" }}
                />
              </div>
              <div className="column is-2">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Domovská stránka
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        O knihe
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Osobnosti
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/presentations">
                        Prezentácie
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-2">
                <div className="content has-text-centered">
                  <img
                    src={insituteLogo}
                    alt="Slováci v Kanade"
                    style={{ height: "10em" }}
                  />
                </div>
              </div>
              <div className="column is-2">
                <p>Copyright © 2022 by Ondrej Miháľ omihal@slovak.com</p>
              </div>
              <div className="column is-2 social">
                <a title="facebook" href="https://www.facebook.com/omihal">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/ondrej.mihal/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
