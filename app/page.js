"use client"


import Nav from "@/components/nav";
import Hero from "@/components/hero";
import About from "@/components/about";
import Job from "@/components/job";
import Career from "@/components/career"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { useScroll, useTransform } from "motion/react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import React from "react";
import Slide from "@/components/slide";



export default function Home() {
  //  const ref = React.useRef(null);
  //    const { scrollYProgress } = useScroll({
  //       target: ref,
  //       offset: ["start start", "end start"],
  //     });

  //     const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.25, 10]);
  //     const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.2, 10]);
  //     const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.15, 10]);
  //     const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.12, 10]);
  //     const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0.25, 10]);

  return (
    <>
      <Nav />
      <Hero />
      <Job />
      <About />
      <CTA 
        title="Ready to Partner with Us?"
        description="Discover how Hworld can help transform your next project with our expertise across construction, marine, and innovative solutions."
        primaryButton={{ text: "Contact Us", href: "/contact" }}
      />
      <Footer />
    </>

  );
}
