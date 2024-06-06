'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import SearchBox from '@/components/SearchBox';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { Heart, Search } from 'lucide-react';


export default function books(){
  const router = useRouter();

  const handleSignupClick = () => {
    router.push('/signup');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  return(
    <main className='min-h-screen bg-gray-10'>
      <header className='flex justify-between gap-8 p-6 border-sl border-2 border-b-black-10'>
        <Image className='' src="/logo-dodobook-white.svg" alt="DODOBOOK" width={72} height={83} />
        <SearchBox />
        <div className='buttons flex justify-between'>
          <Button onClick={handleLoginClick} className="px-4 py-2 text-black-10 hover:bg-black-10 hover:text-white">Login</Button>
          <Button onClick={handleSignupClick} className="px-4 py-2 text-black-10 hover:bg-black-10 hover:text-white">Cadastro</Button>
        </div>
      </header>

      <div className='flex justify-end space-x-4 p-4'>
        <Button className="text-sm px-4 py-2 text-black-10 hover:bg-black-10 hover:text-white"><Heart/>Salvar</Button>
        <Button className="text-sm px-4 py-2 text-black-10 hover:bg-black-10 hover:text-white">Compartilhar</Button>
      </div>

      <div className='p-9 mb-7'>
        <h1 className='font-alt text-4xl mb-7'><strong>Nome do Livro</strong></h1>
        <div className='flex justify-around items-center gap-10'>
          {/* Informações do Livro */}
          <div className='flex items-center gap-7'>
            <div className='bg-black-10 min-w-56 min-h-64 rounded-lg flex items-center justify-center'>
              <Image className='rounded-lg' src="/book-cover.jpg" alt="Nome do Livro" width={143} height={199} />
            </div>
            <div className=''>
              <h3 className='font-sans text-base'><strong>Menor Preço</strong> via amazon</h3>
              <p className='font-sans text-5xl mt-3 mb-3'><strong>R$ 51,70</strong></p>
              <p className='font-sans text-base'>Ou em 2x de R$31,90 <span className='text-green-400'><strong>sem juros</strong></span></p>
            </div>
          </div>

          {/* Se tem grupos disponiveis */}
          <div className='rounded-lg flex items-center justify-between bg-black-10 gap-9 p-16'>
            <p className='font-sans text-base text-white'>Existem hoje 15 grupos disponíveis de estudo para este assunto!</p>
            <div className='flex flex-col gap-5'>
              <Button className="text-sm px-4 py-2 bg-white text-black-10 hover:bg-black-10 hover:text-white">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" stroke="currentColor" strokeWidth={2} />
                Criar novo grupo</Button>
              <Button className="text-sm px-4 py-2 bg-white text-black-10 hover:bg-black-10 hover:text-white">Ver Grupos</Button>
            </div>
          </div>
        </div>
      </div>

      <div className='p-9'>
        <h2 className='font-alt text-2xl mb-3'><strong>Compare preços em 2 lojas</strong></h2>
          <div className='flex justify-between items-center gap-5 border-2 rounded-t-lg border-black-10 p-10'>
            <div className='flex items-center gap-6'>
              <Image className='rounded-lg' src="/book-cover.jpg" alt="Nome do Livro" width={101} height={141} />
              <div>
                <p className='font-sans text-3xl'><strong>R$ 51,70</strong></p>
                <p className='font-sans'>Ou em 2x de R$ 31,90 <span className='text-green-400'>sem juros</span></p>
              </div>
            </div>
      
            <div className='flex items-center gap-2'>
              <p className='font-sans text-base'>Amazon</p>
              <Image className='rounded-lg' src="/amazon.png" alt="Nome do Livro" width={41} height={41} />
              <Button className="text-sm px-4 py-2 bg-black-10 text-white hover:bg-black-10 hover:text-white">Ir á loja</Button>
            </div>
          </div>

          <div className='flex justify-between items-center gap-5 border-2 rounded-b-lg border-black-10 p-10 mt-4'>
            <div className='flex items-center gap-6'>
              <Image className='rounded-lg' src="/book-cover.jpg" alt="Nome do Livro" width={101} height={141} />
              <div>
                <p className='font-sans text-3xl'><strong>R$ 80,99</strong></p>
                <p className='font-sans'>Ou em 2x de R$ 31,90 <span className='text-red-500'>com juros</span></p>
              </div>
            </div>
      
            <div className='flex items-center gap-2'>
              <p className='font-sans text-base'>Amazon</p>
              <Image className='rounded-lg' src="/amazon.png" alt="Nome do Livro" width={41} height={41} />
              <Button className="text-sm px-4 py-2 bg-black-10 text-white hover:bg-black-10 hover:text-white">Ir á loja</Button>
            </div>
          </div>

      </div>






    </main>
  )
}