import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";

const Testimonial = () => {
  return (
    <>
      <div className="w-full relative py-12 px-4 mt-16 lg:py-28 lg:px-16 mb-20">
        {/* Title section */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h4 className="text-[32px] font-bold lg:hidden">What Our Student Say</h4>
          <h2 className="hidden text-5xl font-bold lg:block">Customer testimonials</h2>
          <p className="text-[18px] font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:px-16 gap-6 mt-12">
          {/* Card 1 */}
          <div className="w-full max-w-[360px] bg-[#F7F7F7] border border-black p-6">
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-5 w-5 text-black" />
              ))}
            </div>
            <p className="text-[18px] mb-6">
                 &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
            </p>

            <div className="flex items-center gap-4">
              <Image
                src="/Team3.svg"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold">James Nduku</h4>
                <p className="text-sm">Software Developer</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="hidden lg:block w-full max-w-[360px] bg-[#F7F7F7] border border-black p-6">
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-5 w-5 text-black" />
              ))}
            </div>
            <p className="text-[18px] mb-6">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
            </p>

            <div className="flex items-center gap-4">
              <Image
                src="/Team1.svg"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold">Erick Kipkemboi</h4>
                <p className="text-sm">Scrum Master</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="hidden lg:block w-full max-w-[360px] bg-[#F7F7F7] border border-black p-6">
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-5 w-5 text-black" />
              ))}
            </div>
            <p className="text-[18px] mb-6">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
            </p>

            <div className="flex items-center gap-4">
              <Image
                src="/Team6.svg"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold">Stephen Kerubo</h4>
                <p className="text-sm">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-12">
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-black rounded-full"></span>
            {[...Array(4)].map((_, i) => (
              <span key={i} className="w-2 h-2 bg-gray-400 rounded-full"></span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-full bg-white border border-black w-12 h-12">
              <Image src="/arrow1.svg" alt="" height={24} width={24} />
            </Button>
            <Button className="rounded-full bg-white border border-black w-12 h-12">
              <Image src="/arrow2.svg" alt="" height={24} width={24} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;






