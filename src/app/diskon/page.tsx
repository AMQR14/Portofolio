"use client";

import React, { useState } from "react";

export default function page() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState<null | {
    finalPrice: number;
    discountValue: number;
  }>(null);
  const [error, setError] = useState("");

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);

    const parsedPrice = Number(price);
    const parsedDiscount = Number(discount);

    if (!name.trim()) return setError("Nama barang wajib diisi.");
    if (!category.trim()) return setError("Kategori barang wajib diisi.");
    if (!price || Number.isNaN(parsedPrice) || parsedPrice <= 0)
      return setError("Harga harus berupa angka lebih besar dari 0.");
    if (
      discount === "" ||
      Number.isNaN(parsedDiscount) ||
      parsedDiscount < 0 ||
      parsedDiscount > 100
    )
      return setError("Diskon harus angka antara 0 dan 100 (persentase).");

    const discountValue = (parsedPrice * parsedDiscount) / 100;
    const finalPrice = parsedPrice - discountValue;

    setResult({ finalPrice, discountValue });
  }

  function handleReset() {
    setName("");
    setCategory("");
    setPrice("");
    setDiscount("");
    setResult(null);
    setError("");
  }

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 p-5">
        <div className="text-center bg-slate-900  w-100 h-130 shadow-lg rounded-xl m-auto p-5">
          <form onSubmit={handleCalculate}>
            <h1 className="font-bold text-2xl mt-4 mb-10  text-white">
              Aplikasi Perhitungan Diskon
            </h1>
            <div className="gap-5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukan nama barang"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-5 h-12 text-white"
              />
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Masukan kategori barang"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-5 h-12 text-white"
              />
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Masukan harga barang"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-5 h-12 text-white"
              />
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="Masukan diskon barang (dalam %)"
                className="w-full border border-gray-300 rounded px-2 py-1 mb-5 h-12 text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-3 transition-all"
              >
                Hitung
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full mt-3 transition-all"
              >
                Bersih
              </button>
            </div>

            {error && <p className="text-red-400 mt-4">{error}</p>}

            {result && (
              <div className="mt-6 text-left bg-slate-800 p-4 rounded text-white">
                <h2 className="font-bold text-lg mb-2">Hasil Perhitungan</h2>
                <p>Nama Barang: {name}</p>
                <p>Kategori: {category}</p>
                <p>Diskon: {Number(discount)}%</p>
                <p>
                  Potongan Harga: Rp {result.discountValue.toLocaleString()}
                </p>
                <p className="font-bold">
                  Total Bayar: Rp {result.finalPrice.toLocaleString()}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
