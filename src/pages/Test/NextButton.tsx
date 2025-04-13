import { ArrowRight } from "lucide-react";

export default function NextButton({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center gap-2  rounded-md ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-indigo-600 text-white hover:bg-indigo-700"
      }`}
    >
      <ArrowRight className="w-6 h-6" />
    </button>
  );
}
