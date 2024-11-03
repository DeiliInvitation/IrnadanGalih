import Divider from "@/components/Divider";
import GuestInvitation from "./components/GuestInvitation";
import LoveStory from "./components/LoveStory";
import WeddingGift from "./components/WeddingGift";
import Wishes from "./components/Wishes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full relative">
      <Divider className="scale-150 -mt-[15%] -mb-[7%]" />
      <GuestInvitation />
      <Divider className="scale-125 -mb-[20%] md:-mb-[18%] lg:-mb-[15%] xl:-mb-[11%]" />
      <LoveStory />
      <Divider className="scale-125 -mt-[15%] md:-mt-[13%] lg:-mt-[10%] xl:-mt-[8%]" />
      <WeddingGift />
      <Wishes />
      <Divider className="scale-150 rotate-180 h-44 sm:h-52 md:h-60 object-cover object-bottom -mt-[5%]" />
      <Footer />
    </div>
  );
}
