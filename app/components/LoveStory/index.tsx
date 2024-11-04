"use client";
import { loveStoryData } from "@/data/data";
import Image from "next/image";
import Resepsi from "../Resepsi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LoveStory: React.FC = () => {
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeZoomIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const loveStoryRef = useRef(null);
  const loveStoryInView = useInView(loveStoryRef, { once: true, amount: 0.05 });

  const resepsiRef = useRef(null);
  const resepsiInView = useInView(resepsiRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={loveStoryRef}
      className="bg-bgBlue text-white py-24 sm:py-32 flex flex-col gap-10 max-w-screen-md"
      variants={slideUp}
      initial="hidden"
      animate={loveStoryInView ? "visible" : "hidden"}
    >
      <div className="flex flex-col gap-[30px] px-5">
        <h2 className="font-greatVibes text-5xl text-center">Love Story</h2>
        {loveStoryData.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h3 className="font-greatVibes text-[30px]">{item.title}</h3>
            <div className="flex flex-col gap-5">
              <p className="font-poppins text-xs leading-6 text-justify">
                {item.description}
              </p>
              {item.images?.map((image, idx) => (
                <Image
                  key={idx}
                  src={image}
                  alt={item.title}
                  className="border-2 border-transparent hover:border-gray-300 hover:scale-105 transition-all duration-500"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Resepsi Component with fade zoom-in effect */}
      <motion.div
        ref={resepsiRef}
        variants={fadeZoomIn}
        initial="hidden"
        animate={resepsiInView ? "visible" : "hidden"}
      >
        <Resepsi />
      </motion.div>
    </motion.div>
  );
};

export default LoveStory;
