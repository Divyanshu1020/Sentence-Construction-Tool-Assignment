import Pen from "@/components/icon/Pen";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md">
        <div className="w-8"></div> {/* Empty space for alignment */}
        <h1 className="text-lg font-medium text-gray-800">
          Sentence Construction
        </h1>
        <button className="p-2">
          <MoreVertical size={20} className="text-gray-600" />
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 py-12  mx-auto w-full">
        {/* Edit icon */}
        <div className="mb-1 p-4 rounded-ful">
          <Pen />
        </div>

        {/* Title and instructions */}
        <h2 className=" text-[30px] md:text-[40px] leading-[36px] md:leading-[46px] font-semibold text-center mb-4">
          Sentence Construction
        </h2>
        <p className="text-center text-[15px] md:text-[20px] leading-[28px] text-[#7C8181] mb-12 w-full max-w-[590px]">
          Select the correct words to complete the sentence by arranging the
          provided options in the right order.
        </p>

        {/* Info boxes */}
        <div className="grid grid-cols-[1fr_64px_1fr] md:grid-cols-[1fr_64px_1fr_64px_1fr] gap-y-4 mb-12 w-full max-w-[627px] ">
          <InfoBox title="Time Per Question" value="30 sec" />
          <div className="w-[1px] h-[80%] my-auto mx-auto bg-[#DFE3E3]"></div>
          <InfoBox title="Total Questions" value="10" />
          <div className=" hidden md:block w-[1px] h-[80%] my-auto mx-auto bg-[#DFE3E3]"></div>
          <InfoBox title="Coins" value="0" showCoin  />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 h-[43px] w-full max-w-lg justify-center">
          <button className="px-8 py-3 text-base w-[140px] border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors ">
            Back
          </button>
          <button
            className="w-[140px] text-base px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            onClick={() => {
              navigate("/test");
            }}
          >
            Start
          </button>
        </div>
      </main>
    </div>
  );
}

interface InfoBoxProps {
  title: string;
  value: string;
  showCoin?: boolean;
}

function InfoBox({ title, value, showCoin = false }: InfoBoxProps) {
  return (
    <div className=" last:col-span-3 md:last:col-span-1 flex flex-col items-center h-[72px]">
      <h3 className="text-base md:text-xl text-[#2A2D2D] text-nowrap">{title}</h3>
      <div className="flex items-center mt-auto">
        {showCoin && (
          <span className="inline-block w-4 h-4 rounded-full bg-yellow-400 mr-1"></span>
        )}
        <span className="text-sm md:text-lg text-[#7C8181] font-medium">{value}</span>
      </div>
    </div>
  );
}
