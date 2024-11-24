import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <div className="flex flex-col md:flex-row relative items-center justify-between pl-4 md:pl-20 lg:pl-28">
        {/* Left Side */}
        <div className="max-w-[500px] pl-4 md:pl-10 text-left">
          <h1 className="font-roboto font-bold text-[40px] md:text-[48px] lg:text-[56px] leading-tight">
            Learn new skills online with ease
          </h1>
          <p className="font-roboto font-normal text-[18px] md:text-[18px] mt-4 mb-6">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="flex gap-4">
            <Button className="w-[160px] md:w-[178px] h-[48px] border-[1px] rounded-[5px] bg-black text-white cursor-pointer">
              Start learning now
            </Button>
            <Button className="w-[160px] md:w-[164px] h-[48px] border-[1px] rounded-[5px] border-black bg-white text-black cursor-pointer">
              Explore courses
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-6 md:mt-0">
          <Image
            src="/Image.png"
            alt="Hero Image"
            width={640}
            height={900}
            className="w-full md:w-[500px] lg:w-[640px] h-auto"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full lg-w-[320px] h-auto bg-[#F7F7F7] py-6 md:py-10 flex flex-col lg:flex-row items-center">
        <h5 className="font-roboto font-bold text-lg md:text-2xl text-center lg:text-start mb-6">
          Trusted by 2000+ companies worldwide.
        </h5>
        <div className="flex flex-wrap md:flex-row justify-center lg:ml-16 2xl:ml-96 gap-4 md:gap-8 lg:gap-12">
          <Image
            src="/AirbnbLogo1.png"
            alt="AirbnbLogo1"
            width={123}
            height={38}
            className="w-[80px] md:w-[100px] lg:w-[123px] h-auto"
          />
          <Image
            src="/AirbnbLogo2.png"
            alt="AirbnbLogo2"
            width={123}
            height={38}
            className="w-[80px] md:w-[100px] lg:w-[123px] h-auto"
          />
          <Image
            src="/AirbnbLogo3.png"
            alt="AirbnbLogo3"
            width={123}
            height={38}
            className="w-[80px] md:w-[100px] lg:w-[123px] h-auto"
          />
          <Image
            src="/AirbnbLogo4.png"
            alt="AirbnbLogo4"
            width={123}
            height={38}
            className="w-[80px] md:w-[100px] lg:w-[123px] h-auto"
          />
          <Image
            src="/AirbnbLogo5.png"
            alt="AirbnbLogo5"
            width={123}
            height={38}
            className="w-[80px] md:w-[100px] lg:w-[123px] h-auto"
          />
          <Image
            src="/AirbnbLogo6.png"
            alt="AirbnbLogo6"
            width={123}
            height={38}
            className="w-[80px] md:w-[100px] lg:w-[123px] h-auto"
          />
        </div>
      </div>
    </>
  )
}

export default Hero


