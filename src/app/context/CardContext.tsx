"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface CardContextType {
  cardValues: string[];
  updateCardValue: (index: number, value: string) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cardValues, setCardValues] = useState<string[]>(["", "", "", "", ""]);

  const updateCardValue = (index: number, value: string) => {
    setCardValues((prev) => {
      const newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });
  };

  return (
    <CardContext.Provider value={{ cardValues, updateCardValue }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};
