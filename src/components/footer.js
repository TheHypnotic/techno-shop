import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import reduxLogo from "../static/redux-logo.svg";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaGithub,
  FaSass,
  FaReact,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div id="technologies" className="container">
        <h1>Technologies Used in This Project</h1>
        <div className="flex">
          <div className="flex">
            <FaReact className="logo" />
            <h2>React</h2>
            <p>
              React powers the dynamic and interactive user interface of the
              entire project, providing a seamless experience.
            </p>
          </div>
          <div className="flex">
            {/* <FontAwesomeIcon icon={faRedux} /> */}
            <img className="logo" src={reduxLogo} alt="" />
            <h2>Redux</h2>
            <p>
              Redux efficiently manages the application state, ensuring
              consistent behavior and handling the shopping cart logic.
            </p>
          </div>
          <div className="flex">
            <FaSass className="logo" />
            <h2>Sass</h2>
            <p>
              Sass enhances the styling process, allowing for a modular,
              maintainable, and responsive design throughout the project.
            </p>
          </div>
        </div>
      </div>

      <section id="footer">
        <div className="container flex">
          <div className="guides flex">
            <div className="column">
              <h3>تکنوشاپ</h3>
              <div className="column">
                <ul>
                  <li>
                    <a href="#">درباره تکنوشاپ</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">تماس با تکنوشاپ</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">فرصت های شغلی</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">فروشنده شوید</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <h3>راهنمای خرید</h3>
              <div>
                <ul>
                  <li>
                    <a href="#">روش های پرداخت</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">روش های ارسال کالا</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">لغو و بازگشت کالا</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">ضمانت اصالت کالا</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <h3>خدمات مشتریان</h3>
              <div>
                <ul>
                  <li>
                    <a href="#">راهنمای جامع</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">شرایط و قوانین</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">سوالات متداول</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    <a href="#">حریم خصوصی</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column">
            <h3>با ما همراه باشید</h3>
            <div className="flex">
              <a className="linkedin" href="#">
                <FaLinkedin />
              </a>
              <a className="instagram" href="#">
                <FaInstagram />
              </a>
              <a className="facebook" href="#">
                <FaFacebookF />
              </a>
              <a className="twitter" href="#">
                <FaTwitter />
              </a>
              <a className="youtube" href="#">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="contacts">
            <div>
              <div className="phone-number">
                <div className="flex">
                  <FaPhoneAlt />
                  <a href="tel:021-66112233">۶۶۱۱۱۰۰۰</a>
                </div>
                <p>شنبه تا چهارشنبه ۸:۳۰ الی ۲۱ - پنجشنبه ۹ الی ۲۰</p>
              </div>
              <div className="flex email-address">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:info@mail.com">techno-contact@mail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="git-hub container">
          <a
            href="https://github.com/TheHypnotic/Techno-shop.git"
            target="_blank"
          >
            <span>گیت هاب</span> <FaGithub />
          </a>
        </div>
      </section>
    </>
  );
};

export default Footer;
