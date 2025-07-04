import { getUser } from '@/auth/server'
import React from 'react'

const Navbar = async () => {
  const user = await getUser();
  return (
    <nav className="fixed left-1/2 top-8 z-50 -translate-x-1/2 bg-white backdrop-blur-md shadow-lg rounded-full px-8 py-2 flex items-center justify-between min-w-[260px] max-w-md w-[90vw]">
      <span className="text-lg font-semibold text-black">Earth</span>

      {user && user.email ? (
        <span className="text-black relative group cursor-pointer">
          <svg className='size-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 17C15.6623 17 18.8649 18.5751 20.607 20.9247L18.765 21.796C17.3473 20.1157 14.8473 19 11.9999 19C9.15248 19 6.65252 20.1157 5.23479 21.796L3.39355 20.9238C5.13576 18.5747 8.33796 17 11.9999 17ZM11.9999 2C14.7613 2 16.9999 4.23858 16.9999 7V10C16.9999 12.6888 14.8776 14.8818 12.2168 14.9954L11.9999 15C9.23847 15 6.9999 12.7614 6.9999 10V7C6.9999 4.31125 9.1222 2.11818 11.783 2.00462L11.9999 2ZM11.9999 4C10.4022 4 9.09623 5.24892 9.00499 6.82373L8.9999 7V10C8.9999 11.6569 10.343 13 11.9999 13C13.5976 13 14.9036 11.7511 14.9948 10.1763L14.9999 10V7C14.9999 5.34315 13.6567 4 11.9999 4Z"></path></svg>
          <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
            {user.email}
          </span>
        </span>
      ) : (
        <div>
          <button className="text-purple-600 font-bold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
