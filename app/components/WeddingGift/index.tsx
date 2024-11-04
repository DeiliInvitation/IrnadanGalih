"use client";
import Image from "next/image";
import bsi from "@/public/BSI.png";
import { RiFileCopyLine, RiGiftLine } from "react-icons/ri";
import copy from "copy-to-clipboard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WeddingGift: React.FC = () => {
  const fadeZoomIn = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const copyText = async (text: string, type: string) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(text);
    } else {
      copy(text);
    }
    alert(`${type} tersalin`);
  };

  // Ref to track the element's visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="px-5 py-10 w-full font-poppins text-xs max-w-screen-md">
      <motion.div
        ref={ref}
        className="p-5 w-full border-2 border-bgBlue flex flex-col gap-8 text-center items-center"
        variants={fadeZoomIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="font-greatVibes text-5xl">Wedding Gift</h2>
        <p className="">
          Doa restu yang kami terima sangat berarti, namun jika ingin memberi
          tanda kasih, tentunya semakin melengkapi kebahagiaan kami
        </p>
        <div className="flex flex-col items-center gap-2">
          <Image src={bsi} alt="BSI" className="w-[88px]" />
          <p>
            No Rekening 7278382448
            <br />
            a.n Putri Irna Mardiasih
          </p>
          <button
            className="flex items-center gap-1 bg-bgBlue rounded-full p-1 text-white border-4 border-white hover:border-blue-500 transition-all duration-500"
            onClick={async () => copyText("7278382448", "Nomor rekening BSI")}
          >
            <RiFileCopyLine /> Copy Nomor Rekening
          </button>
        </div>
        <h2 className="font-greatVibes text-5xl">Kirim Kado</h2>
        <div className="flex flex-col items-center gap-2">
          <RiGiftLine className="text-6xl" />
          <p className="font-bold">Putri Irna dan Galih</p>
          <p>
            Gg. Rambutan, Jl. Bhineka Perum. Griya Melati B4 RT/RW 005/003, Kel.
            Jatimurni Kec. Pondok Melati, 17431, Kota Bekasi
          </p>
          <button
            onClick={async () =>
              copyText(
                "Gg. Rambutan, Jl. Bhineka Perum. Griya Melati B4 RT/RW 005/003, Kel. Jatimurni Kec. Pondok Melati, 17431, Kota Bekasi",
                "Alamat"
              )
            }
            className="flex items-center gap-1 bg-bgBlue rounded-full p-1 text-white  border-4 border-white hover:border-blue-500 transition-all duration-500"
          >
            <RiFileCopyLine /> Copy Alamat
          </button>
        </div>
        <p className="text-base">Thank You For Your Gift!</p>
      </motion.div>
    </div>
  );
};

export default WeddingGift;
