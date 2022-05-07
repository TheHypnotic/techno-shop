import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faMobileAndroidAlt,
  faTabletAlt,
  faLaptop,
  faGamepad,
  faHeadphonesAlt,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  useEffect(() => {
    document.querySelector(".menu-bars").addEventListener("click", () => {
      const menu = document.querySelector(".navbar-menu");
      menu.style.display = "block";
    });
  }, []);
  useEffect(() => {
    document.querySelector(".menu-cross").addEventListener("click", () => {
      const menu = document.querySelector(".navbar-menu");
      menu.style.display = "none";
    });
  }, []);

  return (
    <>
      <section id="navbar">
        <div className="container">
          <div className="navbar-top flex justify-between align-center">
            <div className="brand-name flex">
              <div className="d-none menu-bars">
                <FontAwesomeIcon icon={faBars} />
              </div>
              <h1>
                Techno<span>Shop</span>
              </h1>
            </div>
            <div className="search-holder ">
              <div className="flex">
                <div className="searchbar-container">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <div className="line"></div>
                  <input type="text" placeholder="جستجو..." />
                </div>
                <div className="flex align-center cart-acc-container">
                  <button className="account-sign-btn">ورود / ثبت نام</button>
                  <div></div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-menu ">
          <ul className="flex container">
            <li className="nav-item flex">
              <a href="#">خانه</a>
              <div className="d-none menu-cross ">
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-btn">
                <FontAwesomeIcon icon={faMobileAndroidAlt} />
                موبایل
              </a>
              <div className="dropdown-content">
                <a href="#"> سامسونگ | Samsung</a>
                <a href="#">اپل | Apple</a>
                <a href="#">شیاومی | Xiaomi</a>
                <a href="#">سونی | Sony</a>
                <a href="#">هواوی| Huawei</a>
                <a href="#">نوکیا | Nokia</a>
                <a href="#"> آنر |Honor</a>
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-btn">
                <FontAwesomeIcon icon={faTabletAlt} />
                تبلت
              </a>
              <div className="dropdown-content">
                <a href="#"> سامسونگ | Samsung</a>
                <a href="#">اپل | Apple</a>
                <a href="#">لنوو | Lenovo</a>
                <a href="#">نوکیا | Nokia</a>
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-btn">
                <FontAwesomeIcon icon={faLaptop} />
                لپ تاپ
              </a>
              <div className="dropdown-content">
                <a href="#">samsung| سامسونگ</a>
                <a href="#">samsung| سامسونگ</a>
                <a href="#">samsung| سامسونگ</a>
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-btn">
                <FontAwesomeIcon icon={faHeadphonesAlt} />
                لوازم جانبی
              </a>
              <div className="dropdown-content">
                <a href="#"> دل | Dell</a>
                <a href="#">اپل | Apple</a>
                <a href="#">لنوو | Lenovo</a>
              </div>
            </li>
            <li className="nav-item">
              <a href="#">
                <FontAwesomeIcon icon={faGamepad} />
                کنسول بازی
              </a>
            </li>
            <li className="nav-item">
              <a href="#"> تماس با ما</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
