import next from "../assets/next.svg";

const Card = ({ TreatmentName, TreatmentDesc, TreatmentPrice, isGenap }) => {
  return (
    <div
      className={`text-center border-4 border-[#E4C9EB] flex justify-center m-auto h-[100vh] drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] ${
        isGenap == true ? "bg-[#E4C9EB]" : "bg-white"
      }`}
    >
      <div className="py-[52px] px-[22px] flex flex-col ">
        <div className="text-2xl font-bold text-[#4A335F]">{TreatmentName}</div>
        <div className="w-full m-auto "> {TreatmentDesc}</div>
        <div className="flex flex-col justify-between gap-3">
          <div>Mulai dari</div>
          <div className="text-[#7E587D] text-2xl font-bold">
            {TreatmentPrice}
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-[#4A335F] p-3 flex items-center justify-center text-white rounded-sm ">
              Pesan Sekarang
              <img src={next} alt="no foto" className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
