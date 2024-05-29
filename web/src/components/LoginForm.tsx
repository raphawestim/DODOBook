'use client';
import { useAuth } from '../auth/AuthContext';
import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function LoginForm() {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleGoogleLogin = () => {
      window.location.href = 'http://localhost:3000/auth/google';
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (!response.ok) {
                const errorData = await response.json(); // Pegando a mensagem de erro se houver
                throw new Error(errorData.message || 'Failed to login');
            }
    
            const { token } = await response.json(); // Correto acesso ao token
            console.log('Login successful:', token);
            login(token); // Correto uso do token
            router.push('/'); // Use apenas '/' para redirecionar para a página inicial
        } catch (error) {
            alert((error as Error).message);
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-1 p-28 mt-32">
            <label className='font-sans text-2xl font-bold' htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className='border-gray-200 rounded-lg bg-white p-3 font-sans'
            />
            <label className='font-sans text-2xl font-bold' htmlFor="password">Senha</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className='border-gray-200 rounded-lg bg-white p-3 font-sans'
            />
            <div className='flex justify-between items-center'>
                <button type="button" onClick={handleGoogleLogin} className="flex items-center gap-2 justify-center p-3 bg-white font-sans hover:bg-blue-600 rounded-lg shadow-lg text-black-10" style={{ backgroundColor: '#fff' }}>
                    <Image src="/logo_google.svg" alt="logo google" width={28} height={28} />
                    Login com Google
                </button>
                <button className='rounded-xl font-alt text-1xl flex justify-center items-center p-3 gap-1 bg-black-10 text-white hover:bg-gray-200 shadow-lg hover:text-gray-900' type="submit">Login</button>
            </div>
        </form>
    );
}

export default LoginForm;
