import { Plus } from "lucide-react";

const addCalculatorButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={(e) => {
        e.currentTarget.blur();
        onClick();
      }}
      className="flex items-center gap-2 px-4 py-2 bg-background text-blue-600 rounded-lg shadow-sm hover:bg-secondary hover:shadow-md transition-all duration-200 border-2"
    >
      <Plus className="w-5 h-5" />
    </button>
  );
};

export default addCalculatorButton;
