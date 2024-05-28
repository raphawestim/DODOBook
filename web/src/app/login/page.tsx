'use client'
import React, { useState } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { AuthProvider } from '@/auth/AuthContext';
import LoginForm from '../../components/LoginForm';

export default function Login() {
  const router = useRouter();

  const handleSignupClick = () => {
    router.push('/signup');
  };

  return(
    <AuthProvider>
      <main className='min-h-screen grid grid-cols-2'>
        <div className='flex flex-col justify-center p-28 items-center'>
          <Image src="/logo-dodobook-white.svg" alt="DODOBOOK" width={347} height={347} />
          <h1 className='font-alt text-white text-4xl md:text-6xl mb-14'>DODOBOOK</h1>
        </div>
        <div className='bg-gray-10'>
          <div className="flex justify-end space-x-4 p-4">
              <Button onClick={handleSignupClick} className="px-4 py-2 text-black-10 hover:bg-black-10 hover:text-white">Cadastro</Button>
          </div>
          <div className=''>
            <LoginForm />
          </div>
        </div>
      </main>
    </AuthProvider>
  )
}