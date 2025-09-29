import React from "react";
import { Metadata } from "next";
import { title } from "./ujian_544241094";
import text from "../box/page";

export const metadata: Metadata = {
  title: title.title,
  description: title.description,
};

export default function page() {
    
  return (
    <div>
      <div className="card flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="grid grid-cols-2 gap-6 justify-center items-center">
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30"></div>
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30"></div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30"></div>
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30"></div>
            <div className="bg-slate-600 w-60 h-80 rounded-xl shadow-xl/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
