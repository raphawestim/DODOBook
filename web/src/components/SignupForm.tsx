'use client'
import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

function SignupForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const router = useRouter();
    
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleGoogleLogin = () => {
      // Redireciona para a rota do servidor que inicia a autenticação com o Google
      window.location.href = 'http://localhost:3001/users/auth/google';
  };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                })

            });
            console.log(response);

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Não foi possível registrar o usuário");
            }
            console.log("Usuário registrado:", data);
            router.push('http://localhost:3000'); // Redireciona para a página de perfil ou outra rota após sucesso
        } catch (error) {
            alert((error as Error).message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-1 p-28">
            <label className='font-sans text-2xl font-bold' htmlFor="">Nome de Usuário</label>
            <input className='border-gray-200 rounded-lg bg-white p-3 font-sans' type="text" name="name" value={formData.name} onChange={handleChange} required />
            <label className='font-sans text-2xl font-bold' htmlFor="">Endereço de Email</label>
            <input className='border-gray-200 rounded-lg bg-white p-3 font-sans' type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label className='font-sans text-2xl font-bold' htmlFor="">Senha</label>
            <input className='border-gray-200 rounded-lg bg-white p-3 font-sans' type="password" name="password" value={formData.password} onChange={handleChange}  required />
            <label className='font-sans text-2xl font-bold' htmlFor="">Confirmar Senha</label>
            <input className='border-gray-200 rounded-lg bg-white p-3 font-sans' type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            <div>
                <input className='mr-2' type="checkbox" name="terms" id="terms" required />
                <label htmlFor="terms" className='font-sans text-lg'>Eu aceito os <a href="#" className='text-blue-500'>termos de uso</a></label>
            </div>
            <div className='flex justify-between items-center'>
                <button type="button" onClick={handleGoogleLogin} className="flex items-center gap-2 justify-center p-3 bg-white font-sans hover:bg-blue-600 rounded-lg shadow-lg text-black-10" style={{ backgroundColor: '#fff' }}>
                    <Image src="/logo_google.svg" alt="logo google" width={28} height={28} />
                    Login com Google
                </button>
                <button className='rounded-xl font-alt text-1xl flex justify-center items-center p-3 gap-1 bg-black-10 text-white hover:bg-gray-200 shadow-lg hover:text-gray-900' type="submit">Cadastrar</button>
            </div>
            
        </form>
    );
}

export default SignupForm;
