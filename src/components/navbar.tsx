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
import { products } from "../static/products";
import SignIn from "./navbar/signIn";
import ShoppingCart from "./navbar/shoppingCart";
import { useSelector } from "react-redux";

interface Product {
  id: number;
  name: string;
  detail: string;
  category: string;
  brand: string;
  sales: number;
  price: string;
  price2?: string;
  img: string;
  BigImg: string;
  brandFa?: string;
}

const Navbar = () => {
  const [mobileBrands, setMobileBrands] = useState<string[]>([]);
  const [laptopBrands, seLaptopBrands] = useState<string[]>([]);
  const [tabletBrands, setTabletBrands] = useState<string[]>([]);
  const navigate = useNavigate();

  const numberCart: number = useSelector((state: any) => state.cart.numberCart);
  const somethingInCart: boolean = numberCart > 0;

  useEffect(() => {
    const brandList: string[] = [];
    products.map((item: Product) => {
      const { brandFa, category } = item;

      if (category === "phone" && brandFa) {
        if (!brandList.includes(brandFa)) {
          return brandList.push(brandFa);
        }
      }
    });
    setMobileBrands(brandList);
  }, []);
  useEffect(() => {
    const brandList: string[] = [];
    products.map((item: Product) => {
      const { brandFa, category } = item;

      if (category === "laptop" && brandFa) {
        if (!brandList.includes(brandFa)) {
          return brandList.push(brandFa);
        }
      }
    });
    seLaptopBrands(brandList);
  }, []);
  useEffect(() => {
    const brandList: string[] = [];
    products.map((item: Product) => {
      const { brandFa, category } = item;

      if (category === "tablet" && brandFa) {
        if (!brandList.includes(brandFa)) {
          return brandList.push(brandFa);
        }
      }
    });
    setTabletBrands(brandList);
  }, []);
  useEffect(() => {
    document.querySelector(".menu-bars")!.addEventListener("click", () => {
      const menu = document.querySelector(".navbar-menu") as HTMLElement;
      menu.style.display = "block";
      menu.classList.add("d-block");
    });
  }, []);
  useEffect(() => {
    document.querySelector(".menu-cross")!.addEventListener("click", () => {
      const menu = document.querySelector(".navbar-menu") as HTMLElement;
      menu.style.display = "none";
      menu.classList.remove("d-block");
    });
  }, []);

  return (
    <>
      <SignIn />
      <ShoppingCart />

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
                  <div className="number-cart">
                    {somethingInCart && numberCart}
                  </div>
                  <FontAwesomeIcon id="cartIcon" icon={faCartShopping} />
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
