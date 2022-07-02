import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
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
import { products } from "../static/products";

const Navbar = () => {
  const [mobileBrands, setMobileBrands] = useState([]);
  const [laptopBrands, seLaptopBrands] = useState([]);
  const [tabletBrands, setTabletBrands] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const brandList = [];
    products.map((item) => {
      const { brandFa, category } = item;

      if (category === "phone") {
        if (!brandList.includes(brandFa)) {
          return brandList.push(brandFa);
        }
      }
    });
    setMobileBrands(brandList);
  }, []);
  useEffect(() => {
    const brandList = [];
    products.map((item) => {
      const { brandFa, category } = item;

      if (category === "laptop") {
        if (!brandList.includes(brandFa)) {
          return brandList.push(brandFa);
        }
      }
    });
    seLaptopBrands(brandList);
  }, []);
  useEffect(() => {
    const brandList = [];
    products.map((item) => {
      const { brandFa, category } = item;

      if (category === "tablet") {
        if (!brandList.includes(brandFa)) {
          return brandList.push(brandFa);
        }
      }
    });
    setTabletBrands(brandList);
  }, []);
  useEffect(() => {
    document.querySelector(".menu-bars").addEventListener("click", () => {
      const menu = document.querySelector(".navbar-menu");
      menu.style.display = "block";
      menu.classList.add("d-block");
    });
  }, []);
  useEffect(() => {
    document.querySelector(".menu-cross").addEventListener("click", () => {
      const menu = document.querySelector(".navbar-menu");
      menu.style.display = "none";
      menu.classList.remove("d-block");
    });
  }, []);
  useEffect(() => {
    const isActive = document.querySelector(".signin-heading");
    if (isActive.classList.contains("active")) {
      document.querySelector("#signin-form").classList.add("d-block");
    }
    document
      .querySelector(".account-sign-btn")
      .addEventListener("click", () => {
        document.querySelector("#signin").classList.add("d-block");
      });
    document.querySelector(".cross").addEventListener("click", () => {
      document.querySelector("#signin").classList.remove("d-block");
    });

    document.querySelector(".signup-heading").addEventListener("click", () => {
      document.querySelector("#signup-form").classList.add("d-block");
      document.querySelector(".signup-heading").classList.add("active");
      document.querySelector("#signin-form").classList.remove("d-block");
      document.querySelector(".signin-heading").classList.remove("active");
    });
    document.querySelector(".signin-heading").addEventListener("click", () => {
      document.querySelector("#signin-form").classList.add("d-block");
      document.querySelector(".signin-heading").classList.add("active");
      document.querySelector("#signup-form").classList.remove("d-block");
      document.querySelector(".signup-heading").classList.remove("active");
    });
  }, []);
  return (
    <>
      <section id="signin" className="d-none">
        <div id="signin-container">
          <div className=" cross ">
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="signin-tab flex">
            <h3 className="signin-heading active">ورود</h3>
            <h3 className="signup-heading">ثبت نام</h3>
          </div>
          <form id="signin-form" className=" d-none">
            <div className="input-container flex">
              <label htmlFor="">شماره همراه:</label>
              <input type="number" name="Phone" required />
            </div>
            <div className="input-container flex">
              <label htmlFor="">رمز:</label>
              <input type="password" name="Password" required />
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor=""> مرا به خاطر بسپار</label>
            </div>
            <div className="form-btn">
              <button className="btn">ورود</button>
            </div>
          </form>
          <form id="signup-form" className=" d-none">
            <div className="input-container flex">
              <label htmlFor="">نام:</label>
              <input type="text" name="Phone" required />
            </div>
            <div className="input-container flex">
              <label htmlFor="">شماره همراه:</label>
              <input type="number" name="Phone" required />
            </div>
            <div className="input-container flex">
              <label htmlFor="">رمز:</label>
              <input type="password" name="Password" required />
            </div>
            <div className="input-container flex">
              <label htmlFor="">تکرار رمز:</label>
              <input type="password" name="Password" required />
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">قوانین را بطور کامل قبول دارم</label>
            </div>
            <div className="form-btn">
              <button className="btn">ثبت نام</button>
            </div>
          </form>
        </div>
      </section>

      <section id="navbar">
        <div className="container">
          <div className="navbar-top flex justify-between align-center">
            <div className="brand-name flex" onClick={() => navigate("/")}>
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
              <a href="#" onClick={() => navigate("/")}>
                خانه
              </a>
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
                {mobileBrands.map((i, index) => {
                  return (
                    <a key={index} href="#">
                      {i}
                    </a>
                  );
                })}
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-btn">
                <FontAwesomeIcon icon={faTabletAlt} />
                تبلت
              </a>
              <div className="dropdown-content">
                {tabletBrands.map((i, index) => {
                  return (
                    <a key={index} href="#">
                      {i}
                    </a>
                  );
                })}
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-btn">
                <FontAwesomeIcon icon={faLaptop} />
                لپ تاپ
              </a>
              <div className="dropdown-content">
                {laptopBrands.map((i, index) => {
                  return (
                    <a key={index} href="#">
                      {i}
                    </a>
                  );
                })}
              </div>
            </li>
            <li className="dropdown nav-item">
              <a href="#" className="dropdown-btn">
                <FontAwesomeIcon icon={faHeadphonesAlt} />
                لوازم جانبی
              </a>
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
