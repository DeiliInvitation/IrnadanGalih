import { loveStoryData } from "@/data/data";
import Image from "next/image";
import Resepsi from "../Resepsi";

const LoveStory: React.FC = () => {
    return(
        <div className="bg-bgBlue text-white py-32 flex flex-col gap-10 max-w-screen-md">
            <div className="flex flex-col gap-[30px] px-5">
                <h2 className="font-greatVibes text-5xl text-center">Love Story</h2>
                {loveStoryData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <h3 className="font-greatVibes text-[30px]">{item.title}</h3>
                        <div className="flex flex-col gap-5">
                            <p className="font-poppins text-xs leading-6 text-justify">{item.description}</p>
                            {item.images?.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={item.title}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Resepsi />
        </div>
    )
 }

 export default LoveStory;