import Achivements from "@/components/Achivements";
import Courses from "@/components/Courses";
import CoursesTwo from "@/components/CoursesTwo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Courses/>
   <Achivements/>
   <CoursesTwo/>
   <Team/>
   <Testimonial />
   <Footer/>
   </>
  );
}
