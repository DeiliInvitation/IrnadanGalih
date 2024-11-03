import Image from "next/image";
import bunga from "@/public/bunga1.png"

interface dividerProps{
    className?: string;
}

 const Divider: React.FC<dividerProps> = ({ className }) => {
    return(
        <div className="flex w-full justify-center">
            <Image
                src={bunga}
                alt="bunga"
                className={`w-full max-w-[768px] ${className}`}
            />
        </div>
    )
 }

 export default Divider;