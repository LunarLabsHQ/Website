"use client"
import { useEffect } from "react";
import Lenis from "lenis";
import { Landing } from "./pages/Landing";
import { Services } from "./pages/Services";
import { Projects } from "./components/Projects";
import { FooterComp } from "./components/footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  

  return (
    <div>
      <Landing />
      <Services />
      <FooterComp />
    </div>
  );
}
