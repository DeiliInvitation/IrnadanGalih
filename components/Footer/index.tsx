import Image from "next/image";
import logo from "@/public/logo.png";

const Footer: React.FC = () => {
    return(
        <div className="flex items-center gap-3 w-full justify-center p-2 bg-bgBlue text-white z-20">
            <Image
                src={logo}
                alt="Logo"
                className="w-12 h-12"
            />
            <div>
                <p className="font-poppins text-sm">2024 &copy; Deili Invitation. All right reserved.</p>
                <p className="font-darumadrop">crafting memories, design your dream.</p>
            </div>
        </div>
    )
}

export default Footer;