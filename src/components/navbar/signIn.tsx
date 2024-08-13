import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  const [isSignInActive, setIsSignInActive] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleForm = () => {
    setIsSignInActive(!isSignInActive);
  };
  const openModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const accountSignBtn = document.querySelector(".account-sign-btn");
    if (accountSignBtn) {
      accountSignBtn.addEventListener("click", openModal);
    }
    return () => {
      if (accountSignBtn) {
        accountSignBtn.removeEventListener("click", openModal);
      }
    };
  }, []);

  // useEffect(() => {
  //   const isActive = document.querySelector(".signin-heading");
  //   if (isActive.classList.contains("active")) {
  //     document.querySelector("#signin-form").classList.add("d-block");
  //   }
  //   document
  //     .querySelector(".account-sign-btn")
  //     .addEventListener("click", () => {
  //       document.querySelector("#signin").classList.add("d-block");
  //     });
  //   document.querySelector(".cross").addEventListener("click", () => {
  //     document.querySelector("#signin").classList.remove("d-block");
  //   });

  //   document.querySelector(".signup-heading").addEventListener("click", () => {
  //     document.querySelector("#signup-form").classList.add("d-block");
  //     document.querySelector(".signup-heading").classList.add("active");
  //     document.querySelector("#signin-form").classList.remove("d-block");
  //     document.querySelector(".signin-heading").classList.remove("active");
  //   });
  //   document.querySelector(".signin-heading").addEventListener("click", () => {
  //     document.querySelector("#signin-form").classList.add("d-block");
  //     document.querySelector(".signin-heading").classList.add("active");
  //     document.querySelector("#signup-form").classList.remove("d-block");
  //     document.querySelector(".signup-heading").classList.remove("active");
  //   });
  // }, []);
  return (
    <section
      id="signin"
      className={`${isModalVisible ? "d-block" : "d-none"} `}
    >
      <div id="signin-container">
        <div className=" cross " onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="signin-tab flex">
          <h3
            className={`signin-heading ${isSignInActive ? "active" : ""}`}
            onClick={() => setIsSignInActive(true)}
          >
            ورود
          </h3>
          <h3
            className={`signup-heading ${isSignInActive ? "" : "active"}`}
            onClick={() => setIsSignInActive(false)}
          >
            ثبت نام
          </h3>
        </div>
        {isSignInActive && (
          <form id="signin-form">
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
        )}
        {!isSignInActive && (
          <form id="signup-form">
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
        )}
      </div>
    </section>
  );
};

export default SignIn;
