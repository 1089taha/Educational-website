import Image from 'next/image';
import React from 'react';
import { FaStar } from "react-icons/fa";
import { Button } from './ui/button';

const CoursesTwo = () => {
  return (
    <>
    <div className="w-full relative px-4 lg:px-6">
      {/* Title section */}
      <div className="mb-8 lg:mb-16">
        <h1 className="text-center font-roboto font-bold text-3xl lg:text-5xl mb-4">
          Courses
        </h1>
        <p className="text-center font-roboto text-lg lg:text-xl">
          Your Ultimate Guide to learning
        </p>
      </div>

      {/* Courses category section */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <button className="border-b-2 border-black font-medium">Popular</button>
        <button className="font-medium">Recommended</button>
        <button className="font-medium">Best Price</button>
      </div>

      {/* Courses cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-6 justify-items-center">
        {/* Card 1 */}
        <div className="bg-[#F7F7F7] rounded-md overflow-hidden  max-w-[350px]">
          <Image
            src="/cardImage.svg"
            alt="Card Image"
            width={300}
            height={200}
            className="w-full h-[200px] lg:h-[250px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-sm">Design</p>
              <div className="flex items-center">
                <FaStar className="text-gray-400" />
                <p className="font-semibold text-sm ml-1">5.0</p>
              </div>
            </div>
            <h5 className="font-bold text-lg lg:text-xl mb-2">UX/UI Design 201</h5>
            <p className="text-sm lg:text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center gap-4">
              <Button className="border border-black bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
                Enroll Now
              </Button>
              <span className="text-sm font-medium">$400</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F7F7F7] rounded-md overflow-hidden shadow-md max-w-[350px]">
          <Image
            src="/cardImage2.svg"
            alt="Card Image"
            width={300}
            height={200}
            className="w-full h-[200px] lg:h-[250px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-sm">Programming</p>
              <div className="flex items-center">
                <FaStar className="text-gray-400" />
                <p className="font-semibold text-sm ml-1">5.0</p>
              </div>
            </div>
            <h5 className="font-bold text-lg lg:text-xl mb-2">Introduction to Python</h5>
            <p className="text-sm lg:text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center gap-4">
              <Button className="border border-black bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
                Enroll Now
              </Button>
              <span className="text-sm font-medium">$400</span>
            </div>
          </div>
        </div>

        {/* Card3 */}
        <div className="bg-[[#F7F7F7] rounded-md overflow-hidden shadow-md max-w-[350px]">
          <Image
            src="/cardImage3.svg"
            alt="Card Image"
            width={300}
            height={200}
            className="w-full h-[200px] lg:h-[250px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-sm">Business</p>
              <div className="flex items-center">
                <FaStar className="text-gray-400" />
                <p className="font-semibold text-sm ml-1">5.0</p>
              </div>
            </div>
            <h5 className="font-bold text-lg lg:text-xl mb-2">Data Analysis for Beginners</h5>
            <p className="text-sm lg:text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center gap-4">
              <Button className="border border-black bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
                Enroll Now
              </Button>
              <span className="text-sm font-medium">$400</span>
            </div>
          </div>
        </div>
        
        {/* Card4 */}
        <div className="bg-[#F7F7F7] rounded-md overflow-hidden shadow-md max-w-[350px]">
          <Image
            src="/cardImage4.svg"
            alt="Card Image"
            width={300}
            height={200}
            className="w-full h-[200px] lg:h-[250px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-sm">Art</p>
              <div className="flex items-center">
                <FaStar className="text-gray-400" />
                <p className="font-semibold text-sm ml-1">5.0</p>
              </div>
            </div>
            <h5 className="font-bold text-lg lg:text-xl mb-2">Art Specialization</h5>
            <p className="text-sm lg:text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center gap-4">
              <Button className="border border-black bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
                Enroll Now
              </Button>
              <span className="text-sm font-medium">$400</span>
            </div>
          </div>
        </div>

        {/* Card5 */}
        <div className="bg-[#F7F7F7] rounded-md overflow-hidden shadow-md max-w-[350px]">
          <Image
            src="/cardImage5.svg"
            alt="Card Image"
            width={300}
            height={200}
            className="w-full h-[200px] lg:h-[250px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-sm">Law</p>
              <div className="flex items-center">
                <FaStar className="text-gray-400" />
                <p className="font-semibold text-sm ml-1">5.0</p>
              </div>
            </div>
            <h5 className="font-bold text-lg lg:text-xl mb-2">Rule of Law</h5>
            <p className="text-sm lg:text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center gap-4">
              <Button className="border border-black bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
                Enroll Now
              </Button>
              <span className="text-sm font-medium">$400</span>
            </div>
          </div>
        </div>

        {/* Card6 */}
        <div className="bg-gray-100 rounded-md overflow-hidden shadow-md max-w-[350px]">
          <Image
            src="/cardImage6.svg"
            alt="Card Image"
            width={300}
            height={200}
            className="w-full h-[200px] lg:h-[250px] object-cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-sm">Tech</p>
              <div className="flex items-center">
                <FaStar className="text-gray-400" />
                <p className="font-semibold text-sm ml-1">5.0</p>
              </div>
            </div>
            <h5 className="font-bold text-lg lg:text-xl mb-2">Introduction to webflow</h5>
            <p className="text-sm lg:text-base mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
            <div className="flex items-center gap-4">
              <Button className="border border-black bg-white text-black px-4 py-2 rounded-md text-sm font-medium">
                Enroll Now
              </Button>
              <span className="text-sm font-medium">$400</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center justify-center pt-16'>
      <Button className='w-[152px] h-[40px] bg-white text-black border-[1px] border-black'>View All Courses</Button>
    </div>
    </>
  );
};

export default CoursesTwo;
