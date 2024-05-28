import React from "react";
import { Search } from 'lucide-react';

function SearchBox() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative w-full max-w-3xl mx-auto"> {/* Ajustado para max-w-3xl */}
        <input
          type="text"
          placeholder="Buscando algum livro ou artigo?"
          className="w-full md:w-[500px] lg-[600px] xl-[738px] p-3 pl-4 pr-12 border-2 border-gray-200 rounded-lg bg-slate-300 focus:outline-none focus:border-blue-500 font-sans placeholder-gray-500 placeholder-opacity-50"/>
        <button className="absolute inset-y-0 right-0 flex items-center justify-center px-4 rounded-r-lg">
          <Search className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
