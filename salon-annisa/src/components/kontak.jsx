import React from "react";
import WAIcon from "../assets/wa-icon.svg";
import IGIcon from "../assets/ig-icon.svg";
import foto from "../assets/foto.png";

const kontak = () => {
  return (
    <div className="flex justify-evenly bg-white">
      <div className=" p-20 my-auto">
        <div className="mb-8 ml-auto">
          <div className="text-[#4A335F] mt-4 text-xl">
            ingin tau lebih lanjut?
          </div>
          <div className="text-5xl">Hubungi Kami</div>
        </div>
        <div className="flex bg-[#E4C9EB] rounded-full my-2 p-1">
          <div>
            <img
              src={WAIcon}
              alt=""
              className=" mr-2 ml-2 mt-1 justify-normal "
            />
          </div>
          <div className="text-white text-xl ">0877 3888 1510</div>
        </div>

        <div className="flex bg-[#E4C9EB] rounded-full p-1 mt-4">
          <div>
            <img src={IGIcon} alt="" className=" mr-2 ml-2 mt-1" />
          </div>
          <div className="text-white text-xl">annisa_salonmuslimah</div>
        </div>

        <div className="mt-3 text-xl">Atau, Kunjungi kami di sini</div>
      </div>

      <div className="w-1/2  rounded-lg ml-auto">
        <img src={foto} alt="" className="ml-auto" />
      </div>
    </div>
  );
};

export default kontak;
