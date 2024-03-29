import React from "react";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import tshirt1 from "../../assets/Home/tshirt1.svg";
import image2 from "../../assets/Home/image2.svg";
import image3 from "../../assets/Home/image3.svg";
import image4 from "../../assets/Home/image4.svg";
const ProductDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center   ">
      <div className=" m-auto container flex flex-col w-11/12  items-center justify-center  lg:items-end   ">
        <div className="top  flex flex-col  lg:flex-row  lg:mr-[110px]">
          <div className="big_image  ">
            <img className="h-[320px]" src={tshirt1} alt="" />
          </div>
          <div className="small_images flex  lg:flex-col lg:gap-3 lg:ml-2">
            
            <img className="w-[116px] rounded-lg" src={tshirt1} alt="" />
            <img className="w-[116px]"src={tshirt1} alt="" />
            <img className="w-[116px]" src={tshirt1} alt="" />
            
          </div>
        </div>
      </div>

      <div className="reviews flex flex-col m-auto w-11/12   lg:px-5  ">
        <div className="name_stars_price_desc flex flex-col gap-6 border-b border-opacity-10 border-black py-5">
          <h2 className="product name">One Life GRAPHIC TSHIRT</h2>

          <h3 className="price ">$260</h3>

          <p className="prod desc text-sm lg:w-2/3">
            {" "}
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
        </div>

        <div className="product_colours  flex  border-opacity-10 flex-col gap-3 border-b border-black py-4">
          <p className="text-sm text-black text-opacity-70 ">Select colors</p>

          <div className="flex gap-2 ">
            <span className="w-[20px] h-[20px] rounded-full bg-blue-950"></span>
            <span className="w-[20px] h-[20px] rounded-full bg-blue-950"></span>
            <span className="w-[20px] h-[20px] rounded-full bg-blue-950"></span>
            <span className="w-[20px] h-[20px] rounded-full bg-blue-950"></span>
          </div>
        </div>

        <div className="product_sizes border-b border-opacity-10 border-black py-4">
          <div>
            <p className="text-sm text-black text-opacity-70">Choose size</p>
          </div>

          <div className="flex mt-4 gap-2">
            <div className="px-4 rounded-full bg-[#EFEFEF] ">
              <p>Small</p>
            </div>
            <div className="px-4 rounded-full bg-[#EFEFEF]">
              <p>Medium</p>
            </div>
            <div className="px-4 rounded-full bg-[#EFEFEF]">
              <p>Large</p>
            </div>
            <div className="px-4 rounded-full bg-[#EFEFEF]">
              <p>X-large</p>
            </div>
          </div>
        </div>

        <div className="add_to_cart border-b border-opacity-10 border-black py-4 flex  justify-between gap-2 mb-3 lg: w-2/4">
          <div className="increase_number w-1/4 px-2  bg-[#EFEFEF] rounded-full flex items-center justify-center gap-3 lg:w-[100px] ">
            <LuMinus />
            <p>2</p>
            <LuPlus />
          </div>

          <div className="cart w-3/4 py-2 text-center text-white bg-black  rounded-full">
            <p>Add to Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
