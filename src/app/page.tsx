import Navbar from "../components/navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Spline from '@splinetool/react-spline/next';
import Hero from "@/components/hero";

gsap.registerPlugin(ScrollTrigger,SplitText);


export default function Home() {

  return (
    <main className={`font-poppins flex justify-center`}>
      <div className="w-full clip-trapezoid h-dvh">
        <Spline
        scene="https://prod.spline.design/2CH7eFfCTJgiqdt0/scene.splinecode" 
      />
      </div>
      <Navbar />
      <Hero />
    </main>
  );
}
