import React from "react";
import Button from "../button/button";

const Data_filters = () => {
  const filterByCompanies = () => {
    console.log(1);
  };
  const filterByAddSet = () => {
    console.log(2);
  };
  const filterBySet = () => {
    console.log(3);
  };

  return (
    <div>
      <Button onClick={filterByCompanies}>Filter by companies</Button>
      <Button onClick={filterByAddSet}>Filter by Ad Set</Button>
      <Button onClick={filterBySet}>Filter by Ad</Button>
    </div>
  );
};

export default Data_filters;
