import { LogOutAction } from '@/actions/user';
import { getUser } from '@/auth/server';
import Link from 'next/link';

const Page = async () => {
    const user = await getUser();
    const handleLogout = async () => {
        let errorMessage = LogOutAction();
        return errorMessage;
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='text-center space-y-6'>
                {user && user.email ? (
                    <div>
                        <button onClick={handleLogout()}>Logout</button>
                    </div>
                ) : (
                    <div>nothing</div>
                )}
                <h1 className='text-6xl font-bold text-white drop-shadow-lg'>
                    Welcome to <span className='text-violet-300'>Earth</span>
                </h1>
                <div>
                    {user?.email}
                </div>

                <p className='text-xl text-violet-200 font-medium'>
                    Second Brain for Developer
                </p>
                <div className="flex gap-3 justify-center items-center">
                    <Link
                        href="/home"
                        className='bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-xl mt-10 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25'
                    >
                        Explore
                    </Link>
                    <Link
                        href="/login"
                        className='bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-xl mt-10 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25'
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className='bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-xl mt-10 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25'
                    >
                        SignUp
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page
