import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-[#0d2432] flex justify-between items-center p-2 shadow-lg shadow-black/30 sticky top-0 z-50">
        <h1 className="text-white font-bold m-5 text-2xl">Portofolio</h1>
        <ul className="flex gap-10 p-5 text-white font-bold ">
          <li className="hover:-translate-y-0.5 transition-all hover:scale-110 hover:text-[#16ffff] cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:-translate-y-0.5 transition-all hover:scale-110 hover:text-[#16ffff] cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:-translate-y-0.5 transition-all hover:scale-110 hover:text-[#16ffff] cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:-translate-y-0.5 transition-all hover:scale-110 hover:text-[#16ffff] cursor-pointer">
            <a href="#porto">Portofolio</a>
          </li>
          <li className="hover:-translate-y-0.5 transition-all hover:scale-110 hover:text-[#16ffff] cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
