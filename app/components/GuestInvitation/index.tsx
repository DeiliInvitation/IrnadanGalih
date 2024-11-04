"use client";

import { motion } from "framer-motion";
import React from "react";

const GuestInvitation: React.FC = () => {
  const fadeZoomIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center max-w-screen-md gap-10 px-5 pt-10 pb-20 text-center"
      variants={fadeZoomIn}
      initial="hidden"
      animate="visible"
    >
      <div>
        <p className="font-greatVibes text-[25px]">dear,</p>
        <h3 className="text-2xl font-cinzel">Our Beloved Guest</h3>
      </div>
      <p className="font-greatVibes text-[25px]">
        You are invited to celebrate <br />
        our special day
      </p>
      <p className="font-cinzel text-xl">The Wedding Of</p>
      <div>
        <h2 className="font-parisienne text-[38px] whitespace-nowrap">
          Putri Irna Mardiasih
        </h2>
        <p className="font-poppins text-[10px]">
          (Anak pertama Bapak Irmawan & Ibu Heni Dian Chairani)
        </p>
      </div>
      <p className="font-greatVibes text-[64px]">&</p>
      <div>
        <h2 className="font-parisienne text-[38px] whitespace-nowrap">
          Galih T. Nabiyurrahma
        </h2>
        <p className="font-poppins text-[10px]">
          (Anak pertama Bapak Herry Triputra & Ibu Yanti Srimulyati)
        </p>
      </div>
    </motion.div>
  );
};

export default GuestInvitation;
