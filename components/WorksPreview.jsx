import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import img1 from "../public/assets/10.png";
import img2 from "../public/assets/11.png";
import img3 from "../public/assets/12.png";
import { motion } from "framer-motion";

const Work = ({ img, title, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.div
        className="inline-block w-[50rem] mr-24"
        initial={{ filter: "grayscale(100%)" }}
        whileInView={{ filter: "grayscale(0%)" }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: "all" }}
      >
        <Image
          src={img}
          alt={title}
          width="110%"
          height="65%"
          className="cursor-pointer"
          layout="responsive"
        ></Image>
        <h1 className="text-xl md:text-3xl lg:text-6xl text-center cursor-pointer pt-4 inline-block drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
          {title}
        </h1>
      </motion.div>
    </a>
  );
};

const WorksPreview = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-screen h-auto w-screen m-auto overflow-hidden flex justify-start items-start relative"
    >
      <h1
        data-scroll
        data-scroll-speed="-1"
        className="absolute top-4 left-[5%] z-20 lg:text-8xl text-white drop-shadow-[0_5px_3px_rgba(0,0,0)] text-4xl"
      >
        Projects
      </h1>
      <div className="lg:w-[35%] w-[40%] min-h-screen z-10 bg-black text-white fixed left-0 flex justify-center items-center flex-col">
        <p className="w-[80%] md:text-xl font-normal text-[0.5rem] mt-20">
          I’ve always been passionate about pixels and design projects and
          haven’t stopped working and learning about new technologies . Other
          than sitting in from of my display I enjoy myself in casual sports,
          such as bowling or playing football with friends.
          <br />
          <br />
          I&apos;m grateful that my job allows me to work from anywhere. I’m
          active on Instagram where I share most of the and all info about my
          upcoming projects.

        </p>
        <div  className="py-4">
          <a
            type="submit"
            className="bg-white text-black rounded-3xl px-8 py-2 font-bold mt-20 text-[0.5rem] md:text-lg"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1H1uoTk68G6oBoedWu0Momv-Dqrzzfa47/view?usp=sharing"
          >
            MY RESUME/CV
          </a>
        </div>
      </div>
      <div
        ref={horizontalRef}
        className="absolute left-[35%] min-h-screen flex justify-start items-center pl-[30%]"
      >
        <Work
         // href={"https://trip-assistant.netlify.app/"}
          img={img2}
          title="Real-time Chat App"
        />
        <Work
         // href={"https://trip-assistant.netlify.app/"}
          img={img1}
          title="Fullstack Social Media App"
        />
      <Work
         // href={"https://trip-assistant.netlify.app/"}
          img={img3}
          title="Food Ordering App"
        />
      </div>
    </div>
  );
};

export default WorksPreview;
