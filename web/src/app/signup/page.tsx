'use client'
import React, { useState } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

import SignupForm from '../../components/SignupForm';

function signup() {

  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login'); // Direciona o usuário para a página de login
  };
  
    return (
        <main className="min-h-screen grid grid-cols-2">
          
          <div className='flex flex-col justify-center p-28 items-center'>
            <Image src="/logo-dodobook-white.svg" alt="DODOBOOK" width={347} height={347} />
            <h1 className='font-alt text-white text-4xl md:text-6xl mb-14'>DODOBOOK</h1>
            <p className='text-white font-alt'><strong>Junte-se à nossa vibrante comunidade de aprendizado e descubra uma nova maneira de explorar e compartilhar conhecimento.</strong> No DODOBook, conectamos entusiastas da literatura, estudantes, pesquisadores e acadêmicos para colaborar, criar e participar de grupos de estudo sobre uma vasta gama de tópicos e livros.</p>
          </div>
          <div className='bg-gray-10'>
            <div className="flex justify-end space-x-4 p-4">
              <Button onClick={handleLoginClick} className="px-4 py-2 text-black-10 hover:bg-black-10 hover:text-white">Login</Button>
              {/* <Button className="px-4 py-2 text-black-10 hover:bg-black-10 hover:text-white">Cadastro</Button> */}
            </div>
            <div className=''>
              <SignupForm />
            </div>
          </div>
        </main>
    );
}

export default signup;
