import FrontPage from '@/components/MainPage/FrontPage';
import Link from 'next/link';
import WelcomeText from '@/components/MainPage/WelcomeText';
import ExploreText from '@/components/MainPage/ExploreText';

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
                <ExploreText />
            </div>
        </div>
    );
};

export default Page
