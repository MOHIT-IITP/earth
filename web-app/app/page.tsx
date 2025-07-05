import Link from 'next/link';
import FrontPage from '@/components/FrontPage';
import WelcomeText from '@/components/WelcomeText';

const Page = async () => {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='text-center space-y-6'>
                <div className="absolute inset-0 -z-10">
                    <FrontPage />
                </div>
               <WelcomeText />
                <p className='text-xl font-medium shiny-text'>
                    Second Brain for Developer
                </p>
                <div className="flex gap-3 justify-center items-center">
                    <Link
                        href="/home"
                        className='bg-blue-700 text-white px-8 py-3 rounded-xl mt-10 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg'
                    >
                        Explore
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page
