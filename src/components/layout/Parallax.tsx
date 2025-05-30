"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import { Projects } from "../sections/Projects";
import { Services } from "../sections/Services";
import { Testimonials } from "../sections/Testimonials";
import { Footer } from "./Footer";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ParallaxSection({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section ref={ref} id={id} className="img-container">
      <div
        className={`section-content ${
          id !== "hero" && "section-content-no-hero"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const bottomReached =
        window.innerHeight + window.scrollY >=
        containerRef.current.offsetHeight - 100;

      setShowFooter(bottomReached);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="example" className="parallaxSection">
      <ParallaxSection id="hero">
        <Hero />
      </ParallaxSection>
      <ParallaxSection id="about">
        <About />
      </ParallaxSection>
      <ParallaxSection id="projects">
        <Projects />
      </ParallaxSection>
      {/*<ParallaxSection id="services">
        <Services />
      </ParallaxSection>
      <ParallaxSection id="testimonials">
        <Testimonials />
      </ParallaxSection>*/}
      <ParallaxSection id="contact">
        <Contact />
      </ParallaxSection>

      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
      {showFooter && <Footer />}
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
        html {
          scroll-snap-type: y mandatory;
        }

        .img-container {
          height: 100vh;
          scroll-snap-align: start;
          position: relative;
          overflow: hidden;
        }

        .parallax-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .parallax-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .section-content {
          position: relative;
          z-index: 10;
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .progress {
          position: fixed;
          left: 0;
          right: 0;
          height: 5px;
          background: #8df0cc;
          bottom: 50px;
          transform: scaleX(0);
        }
    `}</style>
  );
}
