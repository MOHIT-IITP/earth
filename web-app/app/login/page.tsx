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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-white/20 rounded-full p-3 mb-2 shadow-lg backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-1">Welcome Back</h2>
          <p className="text-white/80 text-sm">Please login to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
              placeholder="you@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 transition bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center bg-white/20 hover:bg-white/30 text-white py-2.5 rounded-lg font-semibold text-lg shadow-lg backdrop-blur-sm transition-all duration-300 border border-white/30 ${
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
            className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-center font-semibold border border-white/30 transition-all duration-200 shadow-sm backdrop-blur-sm"
          >
            Go to Home
          </Link>
          <Link
            href="/login"
            className="w-full bg-white/5 hover:bg-white/15 text-white py-2 rounded-lg text-center font-semibold border border-white/20 transition-all duration-200 shadow-sm backdrop-blur-sm"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
