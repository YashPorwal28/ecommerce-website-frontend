import React from 'react'
import browsedress from '../../assets/Home/browsedress.svg'
import causal from '../../assets/Home/causal.svg'
import formal from '../../assets/Home/formal.svg'
import party from '../../assets/Home/party.svg'
import gym from '../../assets/Home/gym.svg'

const browsedressstyle = () => {
  return (
    <div className='flex flex-col  items-center bg-[#F2F0F1] w-11/12 justify-center m-auto rounded-[20px] mt-4 lg:pt-[40px] '>

        <div className='image-browse-dress mt-3 '>
            <img src={browsedress} alt="" />
        </div>

        <div className="images  grid grid-cols-1 gap-3 lg:grid-cols-2 lg:w-[980px] w-[280px] mt-4 lg:mt-[80px]">
        
        <div className="causal_image w-full bg-white rounded-[20px] ">
            <img className='w-[210px] rounded-[20px] lg:w-[330px] ' src={causal} alt="" />
        </div>
        <div className="formal_image w-full bg-white rounded-[20px]">
            <img className='w-[260px]  rounded-[20px] lg:w-[680px] lg:h-full' src={formal} alt="" />
        </div>
        <div className="party_image w-full bg-white rounded-[20px]">
            <img className='w-[260px]  rounded-[20px] lg:w-[780px] 'src={party} alt="" />
        </div>
        <div className="gym_image w-full bg-white rounded-[20px]">
            <img  className=' w-[200px] h-[110px] rounded-[20px] lg:w-[380px] lg:h-full'src={gym} alt="" />
        </div>
        
        </div>




    </div>
  )
}

export default browsedressstyle