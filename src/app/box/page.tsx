"use client";
import React from "react";

export default function text() {
  const [card, setCard] = React.useState<string[]>([]);

  const inputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const inputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const inputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const inputChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const inputChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-slate-500">
      <input
        type="text"
        placeholder="Card 1"
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange1}
      />
      <input
        type="text"
        placeholder="Card 2"
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange2}
      />

      <input
        type="text"
        placeholder="Card 3"
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange3}
      />
      <input
        type="text"
        placeholder="Card 4"
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange4}
      />
      <input
        type="text"
        placeholder="Card 5"
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange5}
      />
    </div>
  );
}
