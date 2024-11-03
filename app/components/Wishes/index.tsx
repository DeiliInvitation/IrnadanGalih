import Image from "next/image";
import bunga from "@/public/bunga2.png";

const Wishes: React.FC = () => {
  return (
    <div className="flex flex-col mb-5 gap-5 w-full p-5 font-poppins text-xs max-w-screen-md items-center">
      <h2 className="font-greatVibes text-5xl">Wishes</h2>
      <div className="p-3 border-2 border-bgBlue flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nama anda..."
            className="border-[1px] p-1 border-bgBlue"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Ucapan</label>
          <textarea
            name="message"
            id="message"
            placeholder="Ucapan dan doa untuk pengantin..."
            className="border-[1px] p-1 border-bgBlue resize-none"
            cols={5}
          />
        </div>
        <button className="bg-bgBlue rounded-full text-white py-1 px-2 w-fit self-center">
          Kirim Sekarang
        </button>
      </div>
      <div className="-mb-[50px] z-20">
        <Image src={bunga} alt="bunga" className="w-32" />
      </div>
      <div className="guest-message border-2 border-bgBlue w-full h-[340px] overflow-y-auto overflow-x-hidden px-3 py-8 flex flex-col gap-5 items-center">
        <div className="border-b-[1px] border-bgBlue flex flex-col gap-1 pb-1">
          <h3 className="text-sm font-bold">Nama Anda</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex
            fuga suscipit dicta ducimus, possimus ipsa sequi eveniet quae ullam
            neque quasi officiis animi mollitia incidunt quaerat repudiandae
            recusandae ea molestias hic inventore harum odio?
          </p>
        </div>
        <div className="border-b-[1px] border-bgBlue flex flex-col gap-1 pb-1">
          <h3 className="text-sm font-bold">Nama Anda</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ex
            fuga suscipit dicta ducimus, possimus ipsa sequi eveniet quae ullam
            neque quasi officiis animi mollitia incidunt quaerat repudiandae
            recusandae ea molestias hic inventore harum odio?
          </p>
        </div>
      </div>
      <p className="font-greatVibes text-2xl mt-3">See you on our happy day!</p>
    </div>
  );
};

export default Wishes;
