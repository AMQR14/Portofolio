import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-700 to-slate-900 p-5">
        <div className="text-center bg-slate-900  w-100 h-100 shadow-lg rounded-xl m-auto p-5">
          <form action="submit">
            <h1 className="font-bold text-2xl mt-4 mb-10  text-white">
              Aplikasi Perhitungan Diskon
            </h1>
            <div className="gap-5 mb-10">
              <h1 className="text-white font-bold text-lg mb-4">
                Nama Barang:
              </h1>
              <h1 className="text-white font-bold text-lg mb-4">
                Kategori Barang:
              </h1>
              <h1 className="text-white font-bold text-lg mb-4">
                Nilai Diskon:
              </h1>
              <h1 className="text-white font-bold text-lg mb-4">
                Total Harga:
              </h1>
            </div>
            <div>
              <a href="/diskon">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-3 transition-all"
                >
                  Kembali
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
