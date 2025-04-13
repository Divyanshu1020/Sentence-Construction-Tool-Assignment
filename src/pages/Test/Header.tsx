import { useNavigate } from "react-router-dom";

interface TestHeaderProps {
  timeLeft: number;
}

export default function TestHeader({ timeLeft }: TestHeaderProps) {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-center mb-6">
      <div className= "md:text-[24px] leading-[26px] font-semibold text-[#616464]">
        0:{timeLeft}
      </div>
      <button
        onClick={() => navigate("/")}
        className="px-2 md:px-4 py-1 md:py-2 border border-[#DFE3E3] rounded-md text-[#414343] hover:bg-gray-50 md:text-lg"
      >
        Quit
      </button>
    </div>
  );
}