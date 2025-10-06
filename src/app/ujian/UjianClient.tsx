"use client";
import React from "react";
import { useCardContext } from "../context/CardContext";

export default function UjianClient() {
  const { cardValues } = useCardContext();

  return (
    <div>
      <div className="card flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="grid grid-cols-2 gap-6 justify-center items-center">
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30 flex items-center justify-center p-4">
              <span className="text-white text-center">
                {cardValues[0] || "Card 1"}
              </span>
            </div>
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30 flex items-center justify-center p-4">
              <span className="text-white text-center">
                {cardValues[1] || "Card 2"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30 flex items-center justify-center p-4">
              <span className="text-white text-center">
                {cardValues[2] || "Card 3"}
              </span>
            </div>
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30 flex items-center justify-center p-4">
              <span className="text-white text-center">
                {cardValues[3] || "Card 4"}
              </span>
            </div>
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30 flex items-center justify-center p-4">
              <span className="text-white text-center">
                {cardValues[4] || "Card 5"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
