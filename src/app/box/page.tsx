"use client";
import React from "react";
import { useCardContext } from "../context/CardContext";

export default function text() {
  const { cardValues, updateCardValue } = useCardContext();

  const inputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCardValue(0, e.target.value);
  };
  const inputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCardValue(1, e.target.value);
  };

  const inputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCardValue(2, e.target.value);
  };
  const inputChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCardValue(3, e.target.value);
  };

  const inputChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCardValue(4, e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-slate-500">
      <input
        type="text"
        placeholder="Card 1"
        value={cardValues[0]}
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange1}
      />
      <input
        type="text"
        placeholder="Card 2"
        value={cardValues[1]}
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange2}
      />

      <input
        type="text"
        placeholder="Card 3"
        value={cardValues[2]}
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange3}
      />
      <input
        type="text"
        placeholder="Card 4"
        value={cardValues[3]}
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange4}
      />
      <input
        type="text"
        placeholder="Card 5"
        value={cardValues[4]}
        className="bg-gray-400 p-3 rounded-md"
        onChange={inputChange5}
      />
    </div>
  );
}
