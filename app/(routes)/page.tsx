import Aboutme from "@/components/AboutMe";
import Fast from "@/components/Fast";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
   <div className="mt-24">
    <Hero/>
    <Fast/>
    <Aboutme/>
    <Service/>
    <Project/>
    <Testimonial/>
   </div>
  );
}
