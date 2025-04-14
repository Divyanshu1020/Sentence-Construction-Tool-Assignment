import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface TestHeaderProps {
  timeLeft: number;
}

export default function TestHeader({ timeLeft }: TestHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="md:text-[24px] leading-[26px] font-semibold text-[#616464]">
        0:{timeLeft}
      </div>
      {/* <button
        onClick={() => navigate("/")}
        className="px-2 md:px-4 py-1 md:py-2 border border-[#DFE3E3] rounded-md text-[#414343] hover:bg-gray-50 md:text-lg"
      >
        Quit
      </button> */}
      <QuitButton />
    </div>
  );
}

export function QuitButton() {
  const navigate = useNavigate();

  const handleQuit = () => {
    navigate("/");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="px-2 md:px-4 py-1 md:py-2 border border-[#DFE3E3] rounded-md text-[#414343] hover:bg-gray-50 md:text-lg">
          Quit
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[400px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-gray-800">
            Are you sure you want to quit?
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-gray-600 mb-4">
          Your progress may not be saved. Do you still want to leave the game?
        </p>

        <DialogFooter className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            onClick={handleQuit}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Quit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
