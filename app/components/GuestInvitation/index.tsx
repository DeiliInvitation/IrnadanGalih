const GuestInvitation: React.FC = () => {
    return(
        <div className="flex flex-col min-h-screen items-center justify-center max-w-screen-md gap-10 p-5 text-center">
            <div>
                <p className="font-greatVibes text-[25px]">dear,</p>
                <h3 className="text-2xl font-cinzel">Our Beloved Guest</h3>
            </div>
            <p className="font-greatVibes text-[25px]">You are invited to celebrate <br />our special day</p>
            <p className="font-cinzel text-xl">The Wedding Of</p>
            <div>
                <h2 className="font-parisienne text-[38px]">Putri Irna Mardiasih</h2>
                <p className="font-poppins text-[10px]">(Anak pertama Bapak Irmawan & Ibu Heni Dian Chairani)</p>
            </div>
            <p className="font-greatVibes text-[64px]">&</p>
            <div>
                <h2 className="font-parisienne text-[38px]">Galih T. Nabiyurrahma</h2>
                <p className="font-poppins text-[10px]">(Anak pertama Bapak Herry Triputra & Ibu Yanti Srimulyati)</p>
            </div>
        </div>
    )
 }

 export default GuestInvitation;