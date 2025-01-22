import { Link, useLocation } from 'react-router-dom';
import IconHome from '../Icon/IconHome';

const Header = () => {
    const location = useLocation();

    return (
        <header className="z-40 mt-5">
            <div className="flex flex-row justify-center items-center w-full !mt-0 mb-auto">
                <div className="flex justify-center items-center sm:gap-1 rounded-full ring-2 ring-[#dc711a9f] border-2 border-[#dc711a] bg-none md:text-sm sm:text-xs ">
                    <Link to={'/'} className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md">
                        <IconHome />
                    </Link>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '/mystory')}
                    >
                        About
                    </button>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '/myportfolio')}
                    >
                        Projects
                    </button>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '/myexperience')}
                    >
                        Experience
                    </button>
                    <button
                        className="flex items-center p-2 px-4 rounded-ful text-[#dc711a] font-bold py-2 px-4 rounded-full hover:scale-110 hover:shadow-md"
                        onClick={() => (window.location.href = '/contactme')}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
