import { ListFilter, CirclePlus, ArrowRight } from "lucide-react";
import { Switch, Tooltip } from "@material-tailwind/react";
import { useState } from "react";
const HomeDashboard = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="bg-[#191a1a] w-full h-full rounded-xl flex flex-col md:justify-center items-center">
      <h1 className="text-white text-3xl text-center">
        Where knowledge begins
      </h1>
      <div className="md:w-6/12 w-11/12 flex flex-col justify-center items-center mt-10 ">
        <div className="pb-3 border-1 focus-within:border-2 border-[#3d3f40] w-full rounded-lg overflow-hidden bg-[#202222]">
          <textarea
            onChange={(e) => handleInputChange(e)}
            value={inputValue}
            type="text"
            placeholder="Ask anything.."
            className="w-full bg-[#202222] p-3 text-white outline-none resize-none overflow-auto max-h-[45vh]  font-sans caret-superDuper  selection:bg-superDuper selection:text-textMain dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark bg-background text-textMain placeholder-textOff "
          />

          <div className="flex justify-between items-center w-full px-3">
            <div className="flex items-center gap-[5px]">
              <Tooltip
                id="tooltip-1"
                content={
                  <p className="text-[#e8e8e6] font-semibold text-sm">
                    Set a focus for your sources
                  </p>
                }
                className="rounded-[4px] bg-[#2d2f2f] px-4 h-min py-1 shadow-xl"
              >
                <div className="flex gap-[5px] items-center hover:bg-[#2d2f2f] hover:rounded-2xl px-3 py-1 cursor-pointer">
                  <ListFilter color="#938f90" size="20px" />
                  <p className="text-[#938f90] font-semibold">Focus</p>
                </div>
              </Tooltip>
              <Tooltip
                id="tooltip-2"
                content={
                  <p className="text-[#e8e8e6] font-semibold text-sm">
                    Attach text or PDF files. 3 left today
                  </p>
                }
                className="rounded-[4px] bg-[#2d2f2f] px-4 h-min py-1 shadow-xl"
              >
                <div className="flex gap-[5px] items-center hover:bg-[#2d2f2f] hover:rounded-2xl px-3 py-1 cursor-pointer">
                  <CirclePlus color="#938f90" size="20px" />
                  <p className="text-[#938f90] font-semibold">Attach</p>
                </div>
              </Tooltip>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center gap-[10px] group">
                <Switch
                  id="custom-switch-component"
                  ripple={false}
                  className="h-full w-full checked:bg-transparent bg-transparent border-[2px] border-[#3d3f40]"
                  containerProps={{
                    className: "w-11 h-6",
                  }}
                  circleProps={{
                    className:
                      "before:hidden left-0.5 border-none peer-checked:bg-[#20b8cd]",
                  }}
                />
                <p className="text-[#938f90] font-semibold group-hover:text-white">
                  Pro
                </p>
              </div>
              <div
                className={`rounded-full p-2 ${
                  inputValue
                    ? "bg-[#20b8cd] hover:cursor-pointer"
                    : "bg-[#2f302f] cursor-not-allowed"
                }`}
              >
                <ArrowRight
                  color={inputValue ? "#000" : "#848486"}
                  size="20px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-6/12 w-11/12 flex md:flex-row flex-col mt-4 gap-[10px]">
        <div className="md:w-6/12 w-full  items-center flex gap-[10px] p-1 rounded-xl border-[1px] border-[#3d3f40]">
          <div className="bg-[#172528] p-1 rounded-lg h-min text-lg">🎓</div>
          <div className="">
            <p className="text-semibold text-white">
              Global university rankings 2024
            </p>
          </div>
        </div>
        <div className="md:w-6/12 w-full items-center flex gap-[10px] p-1 rounded-xl border-[1px] border-[#3d3f40]">
          <div className="bg-[#172528] p-1 rounded-lg h-min text-lg">⛰️</div>
          <div className="">
            <p className="text-semibold text-white">
              World&apos; greatest hikes
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-6/12 w-11/12 flex md:flex-row flex-col mt-4 gap-[10px]">
        <div className="md:w-6/12 w-full  items-center flex gap-[10px] p-1 rounded-xl border-[1px] border-[#3d3f40]">
          <div className="bg-[#172528] p-1 rounded-lg h-min text-lg">🔎</div>
          <div className="">
            <p className="text-semibold text-white">
             What is Perplexity AI?
            </p>
          </div>
        </div>
        <div className="md:w-6/12 w-full  items-center flex gap-[10px] p-1 rounded-xl border-[1px] border-[#3d3f40]">
          <div className="bg-[#172528] p-1 rounded-lg h-min text-lg">🎬</div>
          <div className="">
            <p className="text-semibold text-white">
              Most popular Youtube creators in 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
