import React from "react";
import { useDispatch } from 'react-redux';
import Filters from "../components/Filters";

const FiltersField = () => {
  const dispatch = useDispatch();
  const onFilterChange = (e) => {

  }

  return (
    <div className='filters-field'>
      <Filters onFilterChange={onFilterChange} />
    </div>
  );
};

export default FiltersField;