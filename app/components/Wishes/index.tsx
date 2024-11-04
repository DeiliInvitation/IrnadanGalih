"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useGetGuestsByClient, usePostGuest } from "@/hooks/useInvitation";
import bunga from "@/public/bunga2.png";
import { motion, useInView } from "framer-motion";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID || "";
const MAX_MESSAGE_LENGTH = 300;

const Wishes: React.FC = () => {
  const [guestName, setGuestName] = useState("");
  const [guestMessage, setGuestMessage] = useState("");
  const [postErrorMessage, setPostErrorMessage] = useState<string | null>(null);
  const [postSuccessMessage, setPostSuccessMessage] = useState<string | null>(null);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  const { guests, loading, error } = useGetGuestsByClient(clientId, shouldRefetch);
  const { postGuest, loading: posting, error: postError, success } = usePostGuest();

  useEffect(() => {
    if (postError || success) {
      if (postError) {
        setPostErrorMessage(postError);
      }
      if (success) {
        setPostSuccessMessage("Ucapan berhasil dikirim!");
        setGuestName("");
        setGuestMessage("");
        setShouldRefetch(!shouldRefetch);
      }

      const timer = setTimeout(() => {
        setPostErrorMessage(null);
        setPostSuccessMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [postError, success]);

  const handleSubmit = async () => {
    if (!guestName || !guestMessage) {
      setPostErrorMessage("Nama dan ucapan wajib diisi.");
      return;
    }

    const guestData = {
      Name: guestName,
      Message: guestMessage,
      Confirmation: "", 
      client_id: clientId,
    };

    await postGuest(guestData);
  };

  const handleGuestMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= MAX_MESSAGE_LENGTH) {
      setGuestMessage(e.target.value);
    }
  };

  // Slide-up animation variant
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Ref for tracking the component visibility
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col mb-5 gap-5 w-full p-5 font-poppins text-xs max-w-screen-md items-center"
      variants={slideUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
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
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Ucapan</label>
          <textarea
            name="message"
            id="message"
            placeholder="Ucapan dan doa untuk pengantin..."
            className="border-[1px] p-1 border-bgBlue h-24 resize-none"
            cols={5}
            value={guestMessage}
            onChange={handleGuestMessageChange}
          />
          <p className="text-right text-gray-500">
            {guestMessage.length}/{MAX_MESSAGE_LENGTH} characters
          </p>
        </div>
        <button
          className="bg-bgBlue rounded-full text-white py-1 px-2 w-fit self-center border-4 border-white hover:border-blue-500 transition-all duration-500 hover:scale-105"
          onClick={handleSubmit}
          disabled={posting}
        >
          {posting ? "Mengirim..." : "Kirim Sekarang"}
        </button>
        {postErrorMessage && <p className="text-red-600 mt-2">{postErrorMessage}</p>}
        {postSuccessMessage && <p className="text-green-600 mt-2">{postSuccessMessage}</p>}
      </div>
      <div className="-mb-[50px] z-20">
        <Image src={bunga} alt="bunga" className="w-32" />
      </div>
      <div className="guest-message border-2 border-bgBlue w-full h-[340px] overflow-y-auto overflow-x-hidden px-3 py-8 flex flex-col gap-3 justify-center items-center">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error loading messages.</p>
        ) : !guests || guests.length === 0 ? (
          <p>No guests to display.</p>
        ) : (
          guests.map((guest, index) => (
            <div key={guest._id} className={`border-b-[1px] border-bgBlue flex flex-col gap-1 pb-2 w-full ${index === guests.length - 1 ? "border-none" : ""}`}>
              <h3 className="text-sm font-bold">{guest.Name}</h3>
              <p>{guest.Message}</p>
            </div>
          ))
        )}
      </div>
      <p className="font-greatVibes text-2xl mt-3">See you on our happy day!</p>
    </motion.div>
  );
};

export default Wishes;
