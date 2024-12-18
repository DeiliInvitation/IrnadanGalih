"use client";

import { useState, useEffect } from "react";
import Divider from "@/components/Divider";
import GuestInvitation from "./components/GuestInvitation";
import LoveStory from "./components/LoveStory";
import WeddingGift from "./components/WeddingGift";
import Wishes from "./components/Wishes";
import Footer from "@/components/Footer";
import Musics from "@/components/Musics";

export default function Home() {
  const [contentVisible, setContentVisible] = useState(false);

  // Scroll to the top of the page on first load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Render Musics component with overlay dismiss handler */}
      <Musics onOverlayDismiss={() => setContentVisible(true)} /> 

      {/* Render main content only if contentVisible is true */}
      {contentVisible && (
        <div className="flex flex-col items-center w-full relative overflow-hidden transition-opacity duration-1000 opacity-100">
          <Divider className="scale-150 md:scale-125 -mt-[15%] -mb-[7%] md:-mt-[13%] lg:-mt-[10%]" />
          <GuestInvitation />
          <Divider className="scale-125 -mb-[20%] md:-mb-[18%] lg:-mb-[15%] xl:-mb-[11%] z-20" />
          <LoveStory />
          <Divider className="scale-125 -mt-[15%] md:-mt-[13%] lg:-mt-[10%] xl:-mt-[8%]" />
          <WeddingGift />
          <Wishes />
          <Divider className="scale-150 md:scale-125 rotate-180 min-w-[375px] object-cover object-bottom -mt-[5%] -mb-20 sm:-mb-24 md:-mb-28 lg:-mb-32" />
          <Footer />
        </div>
      )}
    </div>
  );
}
