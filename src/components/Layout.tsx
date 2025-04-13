import { MoreVertical } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4f6]">
       {/* Header */}
       <header className="flex items-center justify-between p-4 shadow-md">
        <div className="w-8"></div> {/* Empty space for alignment */}
        <h1 className="text-lg font-medium text-gray-800">Sentence Construction</h1>
        <button className="p-2">
          <MoreVertical size={20} className="text-gray-600" />
        </button>
      </header>
    
        {children}
    
    </div>
  );
}