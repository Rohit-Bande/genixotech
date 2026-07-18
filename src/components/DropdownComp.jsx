import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dropdownList } from "../assets/dropdownItem";

const DropdownComp = ({ mobile, handleClosePopUp }) => {
  return (
    <ul
      className={`bg-white mt-8 w-50 shadow-2xl z-[99999] ${
        mobile ? "absolute left-8 right-4 max-h-[45vh] overflow-y-auto" : "w-50"
      }`}
    >
      {dropdownList.map((item, index) => (
        <li
          key={index}
          className="hover:bg-gray-200 px-4 py-2"
          onClick={handleClosePopUp}
        >
          <Link to={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DropdownComp;
