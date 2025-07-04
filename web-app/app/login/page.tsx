"use client"
import Link from 'next/link';
import { LoginAction } from '@/actions/user';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errorMessage = LoginAction(email, password);
    return errorMessage;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 space-y-6">
        <h2 className="text-2xl font-bold text-black text-center mb-4">Login</h2>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-violet-400"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-violet-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-violet-500 hover:bg-violet-600 text-white py-2 rounded font-semibold transition-all duration-300"
        >
          Login
        </button>
        <div className="flex flex-col gap-2 mt-4">
          <Link href="/home" className="w-full bg-violet-200 hover:bg-violet-300 text-violet-800 py-2 rounded text-center font-semibold transition-all duration-300">Go to Home</Link>
          <Link href="/login" className="w-full bg-violet-200 hover:bg-violet-300 text-violet-800 py-2 rounded text-center font-semibold transition-all duration-300">Go to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
