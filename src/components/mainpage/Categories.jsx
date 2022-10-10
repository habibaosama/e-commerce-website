import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Falas Deals",
    },
    
   
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Top Categories",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "New Arrivals",
    },
    
    {
      
      cateName: "Electronics",
    },
   
   
  ];
  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return <div className="box f_flex">
            
            <span>{value.cateName}</span>
          </div>;
        })}
      </div>
    </>
  );
};
export default Categories;
