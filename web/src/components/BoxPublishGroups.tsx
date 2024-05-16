import React from "react";
import Image from 'next/image';
import { Search } from 'lucide-react';
import Button from './Button';

function BoxPublishGroups(){
  return (
    <main className="min-w-screen mt-14">
      <div className="w-1200 bg-gray-10 p-10 m-14 rounded-2xl">
      <div className="flex items-center justify-between">

        <div>
          <h2 className="font-sans text-2xl text-black-10">Procurando grupos de estudo?</h2>
          <p className="font-sans text-base text-black-10">Escolha o artigo acadêmico ou livro e crie um grupo de estudo agora!</p>
        </div>

        <div>
          <Button className="rounded-xl bg-black-10 text-white font-sans flex justify-center items-center p-3 gap-1 hover:bg-slate-400 hover:text-black-10">
            <Search className="w-6 h-6" stroke="currentColor" strokeWidth={2} /> Publicar anúncio
          </Button>
        </div>
      </div>
    </div>
    </main> 
  );
}

export default BoxPublishGroups;