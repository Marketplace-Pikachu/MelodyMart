import React from "react";
import { useSelector } from "react-redux";

const NameDisplay = () => {
  const name = useSelector((state) => state.user.name);
  return <div className='name-display'>Hello, {name}</div>;
};

export default NameDisplay;