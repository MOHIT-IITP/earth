"use client"
import React, { useState } from 'react'
import { LogOutAction } from '@/actions/user';
import { showErrorToast, showSuccessToast } from '@/lib/toastUtils';

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const { errorMessage } = await LogOutAction();
      
      if (errorMessage) {
        showErrorToast(errorMessage);
      } else {
        showSuccessToast("Successfully logged out");
        window.location.href = '/';
      }
    } catch (error) {
      showErrorToast("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleLogout}
      disabled={loading}
      className={`flex items-center gap-2 px-3 py-1 rounded-lg transition-all duration-200 text-black ${
        loading 
          ? 'opacity-60 cursor-not-allowed bg-white/10' 
          : 'hover:bg-white/20'
      }`}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      )}
      {loading ? "Logging out..." : "Logout"}
    </button>
  )
}

export default LogoutButton