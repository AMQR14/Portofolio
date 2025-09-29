import React from "react";

export default function About() {
  return (
    <div>
      <div className="flex justify-around items-center mt-20 mb-20" id="about">
        <div className="rounded-full overflow-hidden drop-shadow-[0_0_60px_rgba(34,211,238,0.9)] drop-shadow-[#16ffff]">
          <img
            src="foto.png"
            alt="Profile Ney"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-white font-bold mb-5 text-6xl">
            About<span className="text-[#16ffff]">Me</span>
          </h1>
          <h1 className="font-bold text-xl text-white">
            Andi Muhammad Qismat Rajjab
          </h1>
          <p className="text-white text-lg mt-8 w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mattis neque augue, eu sagittis ipsum commodo non. Proin semper eget
            arcu non ultrices. Vestibulum commodo, ex a tincidunt vehicula, elit
            turpis rhoncus diam, rutrum aliquam tortor sem vel magna. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Integer ornare dui
            purus, tristique rhoncus leo faucibus hendrerit. Sed pretium maximus
            nisi, a hendrerit tortor pretium et. Aenean ut mauris dictum,
            pellentesque enim eu, scelerisque nulla. Morbi felis sapien,
            fermentum ut orci vel, vehicula mattis orci. In cursus dui ac mi
            molestie, eu efficitur lorem rutrum. Suspendisse malesuada, odio
            pulvinar pharetra porta, nunc purus sollicitudin arcu, ut consequat
            erat tellus eget augue. Integer porta blandit congue. Integer eget
            justo nisi. Pellentesque finibus, dui et venenatis sodales, eros est
            sollicitudin urna, a aliquam massa enim ut purus. Aliquam eget ante
            neque. Sed nec nunc mi. Integer urna ipsum, imperdiet ac bibendum
            ac, tincidunt quis nisl. Aenean vestibulum odio nec ligula
            scelerisque pulvinar sit amet et ante.
          </p>
          <button className="bg-[#16ffff] p-2 font-bold rounded-4xl text-lg w-max shadow-[0_0_20px_8px] hover:shadow-[0_0_40px_10px] ring-4 ring-[#36fcfc] shadow-[#16ffff] transition-all hover:cursor-pointer mt-16 mb-5">
            <p className="ml-6 mr-6 ">More About Me</p>
          </button>
        </div>
      </div>
    </div>
  );
}
