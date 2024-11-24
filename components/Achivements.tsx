import React from 'react';

const Achievements = () => {
  return (
    <>
      <div className="w-full py-28">
        {/* Header Section */}
        <div className="mb-12 px-4 md:px-0">
          <h2 className="text-center font-roboto font-bold text-5xl mb-8 md:mb-12">
            Our Achievements
          </h2>
          <p className="text-center font-normal font-roboto text-[18px] md:text-[20px] max-w-[1152px] mx-auto leading-7 md:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 px-6 md:px-20">
          <div className="flex flex-col items-center">
            <h3 className="font-roboto font-bold text-[40px]">+200</h3>
            <p className="text-center">Courses</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-roboto font-bold text-[40px]">50K</h3>
            <p className="text-center">Mentors</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-roboto font-bold text-[40px]">370K</h3>
            <p className="text-center">Students</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-roboto font-bold text-[40px]">100+</h3>
            <p className="text-center">Recognition</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;

