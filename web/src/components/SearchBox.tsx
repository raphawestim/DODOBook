import React from "react";
import Image from 'next/image';

function SearchBox() {
  return (
    <main className="min-w-screen">
      <div className="flex justify-center items-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Buscando algum livro ou artigo?"
          className="w-96 p-3 pl-4 pr-12 border-2 border-gray-200 rounded-lg bg-slate-300 focus:outline-none focus:border-blue-500 font-sans placeholder-gray-500 placeholder-opacity-50"
        />
        <button
          className="absolute inset-y-0 right-0 flex items-center justify-center px-4 rounded-r-lg "
        >
          <Image src="/search.svg" alt="Search" width={24} height={24} />
        </button>
      </div>
    </div>
    </main>
    
  );
}

export default SearchBox;
