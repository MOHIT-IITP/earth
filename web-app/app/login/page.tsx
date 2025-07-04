"use client"
import Link from 'next/link';
import { LoginAction } from '@/actions/user';
import { useState } from 'react';
import { showErrorToast, showSuccessToast } from '@/lib/toastUtils';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { errorMessage } = await LoginAction(email, password);

    if (errorMessage) {
      showErrorToast(errorMessage);
    } else {
      showSuccessToast("You are Successfully LoggedIn");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-white to-violet-200">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/90 border border-violet-100">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-violet-100 rounded-full p-3 mb-2 shadow">
            <svg className="w-8 h-8 text-violet-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-violet-700 mb-1">Welcome Back</h2>
          <p className="text-gray-500 text-sm">Please login to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center bg-violet-500 hover:bg-violet-600 text-white py-2.5 rounded-lg font-semibold text-lg shadow transition-all duration-300 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            ) : null}
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="flex flex-col gap-2 mt-8">
          <Link
            href="/home"
            className="w-full bg-violet-50 hover:bg-violet-100 text-violet-700 py-2 rounded-lg text-center font-semibold border border-violet-100 transition-all duration-200 shadow-sm"
          >
            Go to Home
          </Link>
          <Link
            href="/login"
            className="w-full bg-white hover:bg-violet-50 text-violet-700 py-2 rounded-lg text-center font-semibold border border-violet-100 transition-all duration-200 shadow-sm"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
