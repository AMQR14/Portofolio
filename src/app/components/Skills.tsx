import React from "react";

export default function Skills() {
  return (
    <div>
      <div className="w-full flex flex-col items-center mb-20" id="skills">
        <h1 className="text-white font-bold text-6xl mt-20">
          My <span className="text-[#16ffff]">Skills</span>
        </h1>
        <div className="flex justify-center items-center w-full ml-20 mr-20 mt-20 gap-80">
          {/* Technical Skills */}
          <div className=" w-[400px]">
            <h1 className="underline font-bold text-2xl text-white mb-8 text-center">
              Technical Skills
            </h1>
            <div className="space-y-8">
              {/* HTML */}
              <div className="flex items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold w-24">HTML</span>
                <div className="flex-1 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    90%
                  </span>
                </div>
              </div>
              {/* CSS */}
              <div className="flex items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold w-24">CSS</span>
                <div className="flex-1 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    60%
                  </span>
                </div>
              </div>
              {/* Javascript */}
              <div className="flex items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JS"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold w-24">
                  Javascript
                </span>
                <div className="flex-1 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    45%
                  </span>
                </div>
              </div>
              {/* Python */}
              <div className="flex items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="Python"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold w-24">Python</span>
                <div className="flex-1 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    50%
                  </span>
                </div>
              </div>
              {/* React */}
              <div className="flex items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="w-8 h-8 mr-3"
                />
                <span className="text-white font-semibold w-24">React</span>
                <div className="flex-1 h-2 bg-black rounded-full mx-3 relative">
                  <div
                    className="h-2 bg-[#16ffff] rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                  <span className="absolute right-0 -top-6 text-white text-xs font-bold">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Professional Skills */}
          <div className="w-[400px]">
            <h1 className="underline font-bold text-2xl text-white mb-8 text-center">
              Professional Skills
            </h1>
            <div className="grid grid-cols-2 gap-5">
              {/* Creativity */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg width="96" height="96" viewBox="0 0 96 96">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#222"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#16ffff"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="25"
                      style={{
                        transition: "stroke-dashoffset 1s",
                        strokeDashoffset: 25,
                      }}
                    />
                  </svg>
                  <span className="absolute text-white text-xl font-bold">
                    90%
                  </span>
                </div>
                <span className="text-white mt-2">Creativity</span>
              </div>
              {/* Communication */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg width="96" height="96" viewBox="0 0 96 96">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#222"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#16ffff"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="50"
                      style={{
                        transition: "stroke-dashoffset 1s",
                        strokeDashoffset: 50,
                      }}
                    />
                  </svg>
                  <span className="absolute text-white text-xl font-bold">
                    80%
                  </span>
                </div>
                <span className="text-white mt-2">Communication</span>
              </div>
              {/* Teamwork */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg width="96" height="96" viewBox="0 0 96 96">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#222"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#16ffff"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="63"
                      style={{
                        transition: "stroke-dashoffset 1s",
                        strokeDashoffset: 63,
                      }}
                    />
                  </svg>
                  <span className="absolute text-white text-xl font-bold">
                    75%
                  </span>
                </div>
                <span className="text-white mt-2">Problem Solve</span>
              </div>
              {/* Problem Solving */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <svg width="96" height="96" viewBox="0 0 96 96">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#222"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="#16ffff"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="251.2"
                      strokeDashoffset="37"
                      style={{
                        transition: "stroke-dashoffset 1s",
                        strokeDashoffset: 37,
                      }}
                    />
                  </svg>
                  <span className="absolute text-white text-xl font-bold">
                    85%
                  </span>
                </div>
                <span className="text-white mt-2">Teamwork</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
