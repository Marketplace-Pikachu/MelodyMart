import React from "react";
import NameDisplay from "../components/NameDisplay";
import FiltersField from "./FiltersField";

const NavContainer = ({ setDisplayMode }) => {
  return (
    <div className='nav-container'>
      <NameDisplay setDisplayMode={setDisplayMode}/>
      <FiltersField />
    </div>
  );
}

export default NavContainer;

