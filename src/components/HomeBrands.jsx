import React from 'react'
import versace from '../assets/Home/versace.svg'
import zara from '../assets/Home/zara.svg'
import gucci from '../assets/Home/gucci.svg'
import prada from '../assets/Home/prada.svg'
import ck from '../assets/Home/ck.svg'
import test from "../assets/Home/gucci.svg"
const HomeBrands = () => {
  return (
    <div className='w-full flex flex-col bg-black py-[40px] gap-7 lg:flex-row lg:h-[158px] lg:justify-center lg:gap-[60px]'>
            

        <div className="brands_top flex gap-7 justify-center  lg:w-[600px] lg:gap-[80px]">
            <img src={versace} alt="" />
            <img src={zara} alt="" />
            <img src={gucci} alt="" />
        </div>

        <div className="brands_bottom flex gap-3 justify-center lg:w-[600px] lg:gap-[80px]">
            <img className="lg:w-[200px]" src={prada} alt="" />
            <img className='lg:w-[200px]' src={ck} alt="" />
        </div>


    </div>
  )
}

export default HomeBrands