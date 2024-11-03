import Image from "next/image";
import particle1 from "@/public/particle1.png";
import particle2 from "@/public/particle2.png";
import { BiMap } from "react-icons/bi";
import Link from "next/link";

const Resepsi: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <div className="relative bg-black bg-opacity-40 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0">
          <Image src={particle1} alt="particle" className="w-[129px]" />
        </div>
        <p className="font-poppins p-5 text-center">
          Tanpa mengurangi rasa hormat, <br />
          kami mengundang Bapak/Ibu/Saudara/i <br />
          untuk menghadiri acara pernikahan kami.
        </p>
      </div>
      <div className="relative w-full">
        <div className="absolute -right-3 top-0 overflow-x-hidden">
          <Image src={particle2} alt="particle" className="min-w-[142px] max-w-[184px]" />
        </div>
      </div>
      <div className="bg-black bg-opacity-40 w-full h-full p-5 font-poppins flex flex-col gap-5 items-center text-center">
        <h2 className="font-greatVibes text-5xl">Resepsi</h2>
        <div>
          <h3 className="text-sm font-bold">Minggu, 15 Desember 2024</h3>
          <p className="text-xs">10:00 - 13:00 WIB</p>
        </div>
        <div>
          <h3 className="text-sm font-bold">Bale Bengong Halim</h3>
          <p className="text-xs">
            Jl. Angkasa, RT.5/RW.9, Halim Perdana Kusumah, <br />
            Kec. Makasar, Kota Jakarta Timur, <br />
            Daerah Khusus Ibukota Jakarta
          </p>
        </div>
        <Link href="" className="flex items-center gap-1 text-sm bg-white bg-opacity-25 py-1 px-3 rounded-full">
          <BiMap /> Google Maps
        </Link>
      </div>
      <p className="p-5 font-poppins text-center text-xs">&quot;Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu <br />mengingat (kebesaran Allah).&quot; <br />(QS. Az-zariyat : 49)</p>
    </div>
  );
};

export default Resepsi;
