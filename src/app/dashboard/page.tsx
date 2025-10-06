import React from "react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full bg-[#f6f7fb] text-[#1f2b5b]">
      {/* Top Nav */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-[#e6e8f5] justify-between">
        <div className=" px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm font-semibold">
            <span className="font-bold">SMK TELKOM MAKASSAR</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="font-bold">OKTAVIANTO</span>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-full px-4 py-6 grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-6">
        {/* Left Column */}
        <section className="space-y-6 ">
          {/* Jurnal Mengajar Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 ">
            {/* Jurnal Mengajar / Status Cards */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e6e8f5] ">
              <div className="px-4 py-3 bg-[#f0f2ff] border-b border-[#e6e8f5] flex items-center justify-between ">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">Jurnal Mengajar</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <select className="rounded-md border border-[#e6e8f5] px-2 py-1 text-[#4a5680] bg-white">
                    <option>XI RPL 4</option>
                    <option>XI RPL 3</option>
                  </select>
                  <input
                    type="date"
                    className="rounded-md border border-[#e6e8f5] px-2 py-1 text-[#4a5680] bg-white"
                  />
                </div>
              </div>

              {/* Status Headings */}
              <div className="px-4 py-3 grid grid-cols-4 items-center">
                <div className="col-span-2 text-center text-lg font-bold">
                  Status Kehadiran
                </div>
                <div className="col-span-2 text-center text-lg font-bold">
                  Status Jurnal
                </div>
              </div>
              {/* Status Row */}
              <div className="relative px-4 pb-4 grid grid-cols-4">
                <div className="absolute left-1/2 top-2 bottom-2 w-px bg-[#e6e8f5]" />
                <div className="text-center py-3">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-[11px] text-[#8b92b7] mt-1">Hadir</div>
                </div>
                <div className="text-center py-3">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-[11px] text-[#8b92b7] mt-1">
                    Tidak Hadir
                  </div>
                </div>
                <div className="text-center py-3">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-[11px] text-[#8b92b7] mt-1">Belum</div>
                </div>
                <div className="text-center py-3">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-[11px] text-[#8b92b7] mt-1">Simpan</div>
                </div>
              </div>
            </div>

            {/* Guru Terbaik */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e6e8f5] flex flex-col justify-center items-center w-full max-w-[420px] items-right ">
              <div className="px-4 py-3 bg-white flex items-center justify-between">
                <span className="text-sm font-semibold">Guru Terbaik</span>
              </div>
              <div className="p-4 text-xs text-[#8b92b7]">
                Belum ada guru terbaik
              </div>
            </div>
          </div>

          {/* Aplikasi Shortcuts */}
          <div className="grid grid-cols-1 lg:grid-cols-[8fr_3fr]  gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e6e8f5] min-h-[440px] flex flex-col">
              <div className="px-4 py-3 bg-[#f0f2ff] border-b border-[#e6e8f5] flex items-center gap-2">
                <span className="text-sm font-semibold">Aplikasi</span>
              </div>

              <div className="flex-1 flex justify-center items-center gap-16 py-4">
                <div className="flex flex-col justify-center items-center translate-3">
                  <div className="bg-[#2e3f8f] w-14 h-14 rounded-xl shadow-sm"></div>
                  <p className="font-bold text-sm max-w-[120px] text-center mt-2">
                    JURNAL MENGAJAR
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-[#2e3f8f] w-14 h-14 rounded-xl shadow-sm"></div>
                  <p className="font-bold text-sm max-w-[120px] text-center mt-2">
                    NILAI
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-[#2e3f8f] w-14 h-14 rounded-xl shadow-sm"></div>
                  <p className="font-bold text-sm max-w-[120px] text-center mt-2">
                    AKADEMIK
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-[#2e3f8f] w-14 h-14 rounded-xl shadow-sm"></div>
                  <p className="font-bold text-sm max-w-[120px] text-center mt-2">
                    PRESENSI
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-[#2e3f8f] w-14 h-14 rounded-xl shadow-sm"></div>
                  <p className="font-bold text-sm max-w-[120px] text-center mt-2">
                    RAPOR
                  </p>
                </div>
              </div>
            </div>
            {/* News */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e6e8f5]">
              <div className="px-4 py-3 bg-[#f0f2ff] border-b border-[#e6e8f5] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">News</span>
                </div>
                <div className="flex items-center gap-2 text-[#8b92b7]">⋯</div>
              </div>
              <div className="p-4">
                <div className="rounded-lg bg-[#f4f6ff] aspect-[16/9] flex items-center justify-center text-[#5a67d8] text-sm">
                  Image
                </div>
                <div className="mt-3 text-sm font-semibold">
                  Aplikasi CUTI 3.0
                </div>
                <p className="mt-1 text-xs text-[#8b92b7] leading-relaxed">
                  Kami informasikan bahwa Aplikasi CUTI telah diperbarui ke
                  Versi 3.0. Pembaruan ini dilakukan untuk menyesuaikan sistem
                  dengan kebijakan Cuti...
                </p>
                <div className="mt-3 text-[11px] text-[#8b92b7]">
                  ∙ 6 hari yang lalu
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {/* Jadwal */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e6e8f5] w-full">
              <div className="px-4 py-3 bg-[#f0f2ff] border-b border-[#e6e8f5] flex items-center gap-2">
                <span className="text-sm font-semibold">
                  Jadwal Mengajar Hari Ini
                </span>
              </div>
              <div className="p-4 text-xs text-[#8b92b7]">Belum ada jadwal</div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e6e8f5]">
              <div className="px-4 py-3 bg-[#f0f2ff] border-b border-[#e6e8f5] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">To Do List</span>
                </div>
                <div className="text-xs text-[#8b92b7]">
                  To Do • Doing • Done
                </div>
              </div>
              <div className="p-4 grid grid-cols-3 gap-3">
                <div className="bg-[#f8f9ff] rounded-lg p-3">
                  <div className="text-[11px] font-semibold text-[#2b3467] mb-2">
                    To Do
                  </div>
                  <div className="text-xs text-[#8b92b7]">Tidak ada item</div>
                </div>
                <div className="bg-[#f8f9ff] rounded-lg p-3">
                  <div className="text-[11px] font-semibold text-[#2b3467] mb-2">
                    Doing
                  </div>
                  <div className="text-xs text-[#8b92b7]">Tidak ada item</div>
                </div>
                <div className="bg-[#f8f9ff] rounded-lg p-3">
                  <div className="text-[11px] font-semibold text-[#2b3467] mb-2">
                    Done
                  </div>
                  <div className="text-xs text-[#8b92b7]">Tidak ada item</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Sidebar - Chat */}
        <aside className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e6e8f5] flex flex-col max-h-[calc(100vh-120px)]">
          <div className="px-4 py-3 bg-[#f0f2ff] border-b border-[#e6e8f5] flex items-center justify-between">
            <span className="text-sm font-semibold">Sapa Guru</span>
            <div className="flex items-center gap-2 text-[#8b92b7]">⋮</div>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            <div className="rounded-xl bg-[#f7f8fd] shadow-sm p-4">
              <div className="flex items-center gap-3 text-xs">
                <div className="h-8 w-8 rounded-full bg-[#f0f2ff]" />
                <div className="font-semibold text-[#2b3467]">
                  DANIEL DUMA TANAN
                </div>
              </div>
              <div className="mt-2 text-sm text-[#4a5680]">
                tabe, ada yang liat kunci motor ku?
              </div>
              <div className="mt-3 flex items-center justify-between text[11px] text-[#8b92b7]">
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    0 orang suka
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    2 hari yang lalu
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-[#f7f8fd] shadow-sm p-4">
              <div className="flex items-center gap-3 text-xs">
                <div className="h-8 w-8 rounded-full bg-[#f0f2ff]" />
                <div className="font-semibold text-[#2b3467]">
                  ANANDA DZIKMAH AMALIA
                </div>
              </div>
              <div className="mt-2 text-sm text-[#4a5680]">
                Keren sekali ini aplikasinya :)
              </div>
              <div className="mt-3 flex items-center justify-between text[11px] text-[#8b92b7]">
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    0 orang suka
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    2 hari yang lalu
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-[#f7f8fd] shadow-sm p-4">
              <div className="flex items-center gap-3 text-xs">
                <div className="h-8 w-8 rounded-full bg-[#f0f2ff]" />
                <div className="font-semibold text-[#2b3467]">
                  ANANDA DZIKMAH AMALIA
                </div>
              </div>
              <div className="mt-2 text-sm text-[#4a5680]">
                Keren sekali ini aplikasinya :)
              </div>
              <div className="mt-3 flex items-center justify-between text[11px] text-[#8b92b7]">
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    0 orang suka
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    2 hari yang lalu
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-[#f7f8fd] shadow-sm p-4">
              <div className="flex items-center gap-3 text-xs">
                <div className="h-8 w-8 rounded-full bg-[#f0f2ff]" />
                <div className="font-semibold text-[#2b3467]">
                  ANANDA DZIKMAH AMALIA
                </div>
              </div>
              <div className="mt-2 text-sm text-[#4a5680]">
                Keren sekali ini aplikasinya :)
              </div>
              <div className="mt-3 flex items-center justify-between text[11px] text-[#8b92b7]">
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    0 orang suka
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    2 hari yang lalu
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-[#f7f8fd] shadow-sm p-4">
              <div className="flex items-center gap-3 text-xs">
                <div className="h-8 w-8 rounded-full bg-[#f0f2ff]" />
                <div className="font-semibold text-[#2b3467]">RISDAYANTI</div>
              </div>
              <div className="mt-2 text-sm text-[#4a5680]">
                malam minggunya dengan DIGITS....SEMANGAT untuk kita semua bapak
                /Ibu
              </div>
              <div className="mt-3 flex items-center justify-between text[11px] text-[#8b92b7]">
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    0 orang suka
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    2 hari yang lalu
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-[#f7f8fd] shadow-sm p-4">
              <div className="flex items-center gap-3 text-xs">
                <div className="h-8 w-8 rounded-full bg-[#f0f2ff]" />
                <div className="font-semibold text-[#2b3467]">
                  RAODATUL JANNAH
                </div>
              </div>
              <div className="mt-2 text-sm text-[#4a5680]">
                Ketik sesuatu ...
              </div>
              <div className="mt-3 flex items-center justify-between text[11px] text-[#8b92b7]">
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    0 orang suka
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="ml-auto text-[13px] text-[#8b92b7]">
                    2 hari yang lalu
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-[#eef0fb]">
            <input
              placeholder="Ketik sesuatu ..."
              className="w-full rounded-lg border border-[#e6e8f5] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#cfd6ff]"
            />
          </div>
        </aside>
      </main>
    </div>
  );
}
