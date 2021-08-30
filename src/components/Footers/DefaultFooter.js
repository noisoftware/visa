/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>

        <img
              alt="..."
              className="n-logo"
              src={require("../../assets/img/visite-logo-white.png").default}
            ></img>
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Get Visa 
                </a>
                </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  About Us
                </a>
                </li>
                <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a
                  href="http://blog.creative-tim.com?ref=nukr-default-footer"
                  target="_blank"
                >
                  Blog
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()},VisiteVista  
            {/* <a
              href="#"
              target="_blank"
            >
              NOI SOFT
            </a>
            . Coded by{" "}
            <a
              href="#"
              target="_blank"
            >
              Creative Tim
            </a> */}
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
