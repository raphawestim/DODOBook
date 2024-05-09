import React from "react";
import Image from 'next/image';

function BoxPublishGroups(){
  return (
    <main className="min-w-screen mt-14">
      <div className="w-1200 bg-white p-10 m-14">
      <div className="flex items-center justify-between">

        <div>
          <h2 className="font-sans text-2xl text-gray-900">Procurando grupos de estudo?</h2>
          <p className="font-sans text-1xl text-gray-900">Escolha o artigo acadêmico ou livro e crie um grupo de estudo agora!</p>
        </div>

        <div>
          <button className="rounded-xl bg-gray-900 text-white font-sans flex justify-center items-center p-3 gap-1">
            <Image src="/search.svg" alt="Search" width={25} height={25} />
            Publicar anúncio
          </button>
        </div>

      </div>
    </div>
    </main> 
  );
}

export default BoxPublishGroups;