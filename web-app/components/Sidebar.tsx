import Link from 'next/link'
import React from 'react'

interface SidebarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Sidebar = ({ onNavigate, activeSection }: SidebarProps) => {
    return (
        <div className="h-full p-6">
            <div className='flex flex-col items-start justify-center border-b-violet-400 border-b-1 pb-2 space-y-2'>
                <Link href={'/'}>
                    <div className='flex items-center gap-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-10 text-violet-300' viewBox="0 0 24 24" fill="currentColor"><path d="M9 4C10.1046 4 11 4.89543 11 6V12.8271C10.1058 12.1373 8.96602 11.7305 7.6644 11.5136L7.3356 13.4864C8.71622 13.7165 9.59743 14.1528 10.1402 14.7408C10.67 15.3147 11 16.167 11 17.5C11 18.8807 9.88071 20 8.5 20C7.11929 20 6 18.8807 6 17.5V17.1493C6.43007 17.2926 6.87634 17.4099 7.3356 17.4864L7.6644 15.5136C6.92149 15.3898 6.1752 15.1144 5.42909 14.7599C4.58157 14.3573 4 13.499 4 12.5C4 11.6653 4.20761 11.0085 4.55874 10.5257C4.90441 10.0504 5.4419 9.6703 6.24254 9.47014L7 9.28078V6C7 4.89543 7.89543 4 9 4ZM12 3.35418C11.2671 2.52376 10.1947 2 9 2C6.79086 2 5 3.79086 5 6V7.77422C4.14895 8.11644 3.45143 8.64785 2.94126 9.34933C2.29239 10.2415 2 11.3347 2 12.5C2 14.0652 2.79565 15.4367 4 16.2422V17.5C4 19.9853 6.01472 22 8.5 22C9.91363 22 11.175 21.3482 12 20.3287C12.825 21.3482 14.0864 22 15.5 22C17.9853 22 20 19.9853 20 17.5V16.2422C21.2044 15.4367 22 14.0652 22 12.5C22 11.3347 21.7076 10.2415 21.0587 9.34933C20.5486 8.64785 19.8511 8.11644 19 7.77422V6C19 3.79086 17.2091 2 15 2C13.8053 2 12.7329 2.52376 12 3.35418ZM18 17.1493V17.5C18 18.8807 16.8807 20 15.5 20C14.1193 20 13 18.8807 13 17.5C13 16.167 13.33 15.3147 13.8598 14.7408C14.4026 14.1528 15.2838 13.7165 16.6644 13.4864L16.3356 11.5136C15.034 11.7305 13.8942 12.1373 13 12.8271V6C13 4.89543 13.8954 4 15 4C16.1046 4 17 4.89543 17 6V9.28078L17.7575 9.47014C18.5581 9.6703 19.0956 10.0504 19.4413 10.5257C19.7924 11.0085 20 11.6653 20 12.5C20 13.499 19.4184 14.3573 18.5709 14.7599C17.8248 15.1144 17.0785 15.3898 16.3356 15.5136L16.6644 17.4864C17.1237 17.4099 17.5699 17.2926 18 17.1493Z"></path></svg>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">Earth</h1>
                    </div>
                </Link>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Second Brain for Developer</p>
            </div>
            <div className="mt-8 space-y-4">
                <div 
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                        activeSection === 'notes' 
                            ? 'bg-violet-700 ' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => onNavigate('notes')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Developer Notes</span>
                </div>
                <div 
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                        activeSection === 'todo' 
                            ? 'bg-violet-700 ' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => onNavigate('todo')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Developer Todo</span>
                </div>
                <div 
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                        activeSection === 'draw' 
                            ? 'bg-violet-700' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => onNavigate('draw')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Developer Draw</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
