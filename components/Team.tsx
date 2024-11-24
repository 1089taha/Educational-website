import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const Team = () => {
  return (
  <>
    <div className='w-full relative py-12 px-6 bg-[#F7F7F7] lg:px-16 lg:py-28 mt-16'>
      {/* Title section */}
      <div className='flex flex-col items-center gap-6'>
        <h2 className='font-roboto text-center font-bold text-3xl lg:text-5xl'>Our team</h2>
        <p className='text-center font-roboto text-[18px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      
      {/* Team Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 gap-y-6 justify-items-center lg:mt-20'>
      {/* Card1 */}
      <div className='max-w-[400px] flex flex-col items-center mt-12'>
        <Image src="/Team1.svg" alt='' width={80} height={80}/>
        <h6 className='font-roboto font-semibold text-[20px] mt-6'>James Nduku</h6>
        <p className='font-roboto font-normal text-[18px] mt-1'>Marketing Coordinator</p>
        <div className='flex mt-6 gap-4 lg:mt-14'>
          <FaLinkedin/>
          <FaTwitter/>
          <FaDribbble/>
        </div>
      </div>

      {/* Card2 */}
      <div className='max-w-[400px] flex flex-col items-center mt-12'>
        <Image src="/Team2.svg" alt='' width={80} height={80}/>
        <h6 className='font-roboto font-semibold text-[20px] mt-6'>Joseph Munyambu</h6>
        <p className='font-roboto font-normal text-[18px] mt-1'>Nursing Assistant</p>
        <div className='flex mt-6 gap-4 lg:mt-14'>
          <FaLinkedin/>
          <FaTwitter/>
          <FaDribbble/>
        </div>
      </div>

      {/* Card3 */}
      <div className='max-w-[400px] flex flex-col items-center mt-12'>
        <Image src="/Team3.svg" alt='' width={80} height={80}/>
        <h6 className='font-roboto font-semibold text-[20px] mt-6'>Joseph Ngumbau</h6>
        <p className='font-roboto font-normal text-[18px] mt-1'>Medical Assistant</p>
        <div className='flex mt-6 gap-4 lg:mt-14'>
          <FaLinkedin/>
          <FaTwitter/>
          <FaDribbble/>
        </div>
      </div>

      {/* Card4 */}
      <div className='max-w-[400px] flex flex-col items-center mt-12'>
        <Image src="/Team4.svg" alt='' width={80} height={80}/>
        <h6 className='font-roboto font-semibold text-[20px] mt-6'>Erick Kipkemboi</h6>
        <p className='font-roboto font-normal text-[18px] mt-1'>Web Designer</p>
        <div className='flex mt-6 gap-4 lg:mt-14'>
          <FaLinkedin/>
          <FaTwitter/>
          <FaDribbble/>
        </div>
      </div>

      {/* Card5 */}
      <div className='max-w-[400px] flex flex-col items-center mt-12'>
        <Image src="/Team5.svg" alt='' width={80} height={80}/>
        <h6 className='font-roboto font-semibold text-[20px] mt-6'>Stephen Kerubo</h6>
        <p className='font-roboto font-normal text-[18px] mt-1'>President of Sales</p>
        <div className='flex mt-6 gap-4 lg:mt-14'>
          <FaLinkedin/>
          <FaTwitter/>
          <FaDribbble/>
        </div>
      </div>

      {/* Card6 */}
      <div className='max-w-[400px] flex flex-col items-center mt-12'>
        <Image src="/Team6.svg" alt='' width={80} height={80}/>
        <h6 className='font-roboto font-semibold text-[20px] mt-6'>John Leboo</h6>
        <p className='font-roboto font-normal text-[18px] mt-1'>Dog Trainer</p>
        <div className='flex mt-6 gap-4 lg:mt-14'>
          <FaLinkedin/>
          <FaTwitter/>
          <FaDribbble/>
        </div>
      </div>

      </div>
    </div>
  </>
  )
}

export default Team
