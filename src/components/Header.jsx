import React from "react";

export default function Header() {
  return (
    <header className="header flex items-center justify-between shadow-md px-8 py-4">
      {" "}
      <div className="logo w-12 h-12 ">
        {" "}
        <img
          className="object-cover rounded-[50%] w-full h-full"
          src="https://aditya-birthday-wishes-card.netlify.app/assets/logo.jpg"
          alt=""
        />{" "}
      </div>{" "}
      <nav>
        {" "}
        <ul className="flex gap-2">
          {" "}
          <li className="text-3xl">
            {" "}
            <a
              href="https://www.instagram.com/aaditya_kumar_1120/?next=%2F"
              target="_blank"
            >
              {" "}
              <i className="ri-instagram-line"></i>{" "}
            </a>{" "}
          </li>{" "}
          <li className="text-3xl">
            {" "}
            <a href="https://github.com/adityakumar1120" target="_blank">
              {" "}
              <i className="ri-github-fill"></i>{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </header>
  );
}
