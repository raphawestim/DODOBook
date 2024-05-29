'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import SearchBox from '../components/SearchBox';
import BoxPublishGroups from '../components/BoxPublishGroups';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '../auth/AuthContext';

export default function Home() {
  const { isLoggedIn, login, logout } = useAuth(); // Use o contexto aqui
  const router = useRouter();

  const handleSignupClick = () => {
    router.push('/signup');
  };

  const handleLoginClick = () => {
    router.push('/login');
  };

  const handleProfileClick = () => {
    router.push('/profile');
  };

  const handleMyGroupsClick = () => {
    router.push('/my-groups');
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
        login(token);  // Atualiza o estado de isLoggedIn para true se um token for encontrado
    }
}, []);


  useEffect(() => {
    console.log("Is Logged In changed: ", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthProvider>
      <main className="min-h-screen">
        <div className="flex justify-end space-x-4 p-4">
          {isLoggedIn ? (
            <>
              <Button onClick={handleProfileClick} className="px-4 py-2 text-white hover:bg-white hover:text-black-10">Meu Perfil</Button>
              <Button onClick={handleMyGroupsClick} className="px-4 py-2 text-white hover:bg-white hover:text-black-10">Meus Grupos</Button>
            </>
          ) : (
            <>
              <Button onClick={handleLoginClick} className="px-4 py-2 text-white hover:bg-white hover:text-black-10">Login</Button>
              <Button onClick={handleSignupClick} className="px-4 py-2 text-white hover:bg-white hover:text-black-10">Cadastro</Button>
            </>
          )}
        </div>
        <div className="flex items-center flex-col justify-center">
          <Image src="/logo-dodobook-white.svg" alt="DODOBOOK" width={347} height={347} />
          <h1 className='font-alt text-white text-4xl md:text-6xl'>DODOBOOK</h1>
        </div>
        <div className='w-full flex items-center justify-center'>
          <SearchBox />
        </div>
        <div className='flex items-center flex-col justify-center'>
          <BoxPublishGroups />
        </div>
      </main>
    </AuthProvider>
  );
}
