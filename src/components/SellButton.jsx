import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemModal from "./ItemModal";

const SellButton = () => {
  const [open, setOpen] = useState(false);
 
  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

  // const toggleForm = () => {  
  //   setOpen(!open);
  // };
  
  return (
    <div className="sell-button">
      <button onClick={handleOpen}>Sell Item</button>
      <ItemModal isOpen={open} handleClose={handleClose} />
    </div>
  )
}

  export default SellButton;