import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Courses = () => {
  return (
    <>
      <div className="w-full relative">
        {/* Top section */}
        <div className="py-20 px-8 md:py-28 md:px-16">
          <h2 className="text-center font-roboto font-bold text-3xl md:text-5xl mb-4 md:mb-6">
            Explore Courses By Category
          </h2>
          <p className="text-center font-roboto font-normal text-sm md:text-[14px]">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>

        {/* Middle section */}
        {/* Cards */}
        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap-16 mb-16 px-4 md:px-8">
          {/* Card */}
          {[
            { title: "Design & Development", img: "/Frame1.svg" },
            { title: "Marketing", img: "/Frame2.svg" },
            { title: "Development", img: "/Frame3.svg" },
            { title: "Communication", img: "/Frame5.svg" },
            { title: "Digital Marketing", img: "/Frame4.svg" },
            { title: "Self Development", img: "/Frame6.svg" },
            { title: "Business", img: "/Frame7.svg" },
            { title: "Finance", img: "/Frame8.svg" },
            { title: "Consulting", img: "/Frame9.svg" },
          ].map((course, index) => (
            <div
              key={index}
              className="w-full flex items-center gap-4 p-4 md:gap-8 md:p-6 bg-[#F7F7F7] rounded-[5px] "
            >
              <div>
                <Image src={course.img} alt={course.title} width={100} height={100} />
              </div>
              <div>
                <h5 className="font-roboto font-semibold text-lg md:text-xl">
                  {course.title}
                </h5>
                <p className="font-roboto font-normal text-sm md:text-[18px]">
                  50+ Courses Available
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex justify-center items-center">
          <Button className="w-[130px] md:w-[155px] h-10 md:h-12 border-[1px] rounded-[5px] border-black font-roboto font-normal text-sm md:text-[16px] bg-white text-black cursor-pointer">
            View All Courses
          </Button>
        </div>
      </div>
    </>
  );
};

export default Courses;
