import Aboutme from "@/components/AboutMe";
import Fast from "@/components/Fast";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div className="mt-24">
    <Hero/>
    <Fast/>
    <Aboutme/>
   </div>
  );
}
