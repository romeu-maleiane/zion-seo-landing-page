import Navbar from "../components/navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Spline3D from "@/components/spline3d";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Feedback from "@/components/feedback";

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function Home() {

  return (
    <main className={`font-poppins w-full bg-gray-30`}>
      <Navbar />
      <Spline3D />
      <Hero />
      <Clients />
      <Features />
      <Feedback />
      <Pricing />
    </main>
  );
}
