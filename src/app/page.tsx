import Navbar from "../components/navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Hero from "@/components/hero";
import Clients from "@/components/clients";
import Spline3D from "@/components/spline3d";

gsap.registerPlugin(ScrollTrigger, SplitText);


export default function Home() {

  return (
    <main className={`font-poppins w-full`}>
      <Navbar />
      <Spline3D />
      <Hero />
      <Clients />
    </main>
  );
}
