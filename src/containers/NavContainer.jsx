import React from "react";
import NameDisplay from "../components/NameDisplay";
import FiltersField from "../components/FiltersField";

const NavContainer = () => {
  return (
    <div className='nav-container'>
      <NameDisplay />
      <FiltersField />
    </div>
  );
}

export default NavContainer;

