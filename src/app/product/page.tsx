import React from "react";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b gradient from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="flex flex-col bg-gray-900/80 rounded-2xl shadow-lg p-8 w-full max-w-md m-4 border border-white/20  transition-all">
        <input
          type="text"
          className="bg-gray-900/80 rounded-2xl shadow-lg p-10 w-full max-w-md mb-8 h-20 border border-white/20 appearance-none text-white text-3xl text-right focus:outline-none hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 transition-all"
        />
        <div className="grid grid-cols-4 gap-4">
          <button className="bg-slate-800 rounded-xl flex items-center justify-center w-full h-12 hover:bg-slate-700 hover:scale-105 transition-all text-white">
            (
          </button>
          <button className="bg-slate-800 rounded-xl flex items-center justify-center w-full h-12 hover:bg-slate-700 hover:scale-105 transition-all text-white">
            )
          </button>
          <button className="bg-slate-800 rounded-xl flex items-center justify-center w-full h-12 hover:bg-slate-700 hover:scale-105 transition-all text-white">
            %
          </button>
          <button className="bg-slate-800 rounded-xl flex items-center justify-center w-full h-12 hover:bg-slate-700 hover:scale-105 transition-all text-white">
            AC
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            1
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            2
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            3
          </button>
          <button className="bg-slate-800 rounded-xl flex items-center justify-center w-full h-12 hover:bg-slate-700 hover:scale-105 transition-all text-white">
            ÷
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            4
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            5
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            6
          </button>
          <button className="bg-slate-800 rounded-xl flex items-center justify-center w-full h-12 hover:bg-slate-700 hover:scale-105 transition-all text-white">
            X
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            7
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            8
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            9
          </button>
          <button className="bg-slate-800 rounded-xl flex items-center justify-center w-full h-12 hover:bg-slate-700 hover:scale-105 transition-all text-white">
            -
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            0
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-gray-800 hover:scale-105 transition-all text-white">
            .
          </button>
          <button className="bg-gray-700 rounded-xl flex items-center justify-center w-full h-12 hover:bg-amber-600 hover:scale-110 hover:-rotate-3 transition-all text-white">
            =
          </button>
          <button className="bg-slate-800 rounded-xl flex items-center justify-center w-full h-12 hover:bg-slate-700 hover:scale-105 transition-all text-white">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
