import React from "react";
import Image from 'next/image';
import { Search } from 'lucide-react';

function SearchBox() {
  return (
    <main className="">
      <div className="flex justify-center items-center">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Buscando algum livro ou artigo?"
          className="w-[783px] p-3 pl-4 pr-12 border-2 border-gray-200 rounded-lg bg-slate-300 focus:outline-none focus:border-blue-500 font-sans placeholder-gray-500 placeholder-opacity-50"
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center justify-center px-4 rounded-r-lg "
        >
          <Search className="w-6 h-6" stroke="currentColor" strokeWidth={2} />
        </button>
      </div>
    </div>
    </main>
    
  );
}

export default SearchBox;
