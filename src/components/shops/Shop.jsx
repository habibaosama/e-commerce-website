import React from "react"

import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ shopItems,addToCart }) => {
  return (
    <>
      <section className='shop background'>
        <div className='container d_flex'>
         

          <div className='contentWidth'>
            <div className='heading d_flex'>
              <div className='heading-left row  f_flex'>
                <h2>Electronics</h2>
              </div>
              <div className='heading-right row '>
                <span>View all</span>
                <i className='fa-solid fa-caret-right'></i>
              </div>
            </div>
            <div className='product-content  grid1'>
              <ShopCart addToCart={addToCart}  shopItems={shopItems}  />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop;
