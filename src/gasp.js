import { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapFade = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        blur: 10,
        scale: 1.1,
        filter: "blur(20px)",
        transformPerspective: 500,
        rotationX: 30,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        blur: 0,
        duration: 1.2,
        stagger: 0.1,
        delay: delay,
        ease: Expo.easeInOut,
        rotationX: 0,
      }
    );
  }, []);
};

export const useGsapDownStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: "-20%",
        opacity: 0,
        filter: "blur(20px)"
      },
      {
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 1.2,
        stagger: 0.8,
        delay: delay,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

export const useGsapUpward = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: delay,
        ease: Expo.easeIn,
      }
    );
  }, []);
};