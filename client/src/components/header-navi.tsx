import { useState } from "react";
import openIpImage from '../assets/openip.jpg';

interface AuthButtonProps {
    loginLogoutHandler: () => void;
}


export default function HeaderNavi() {

    const [loggedIn, setLoggedIn] = useState(false);

    const loginLogoutHandler = () => {
        setLoggedIn(!loggedIn);
    }

    return (
        <div>
            <div className="container">
                <header className="flex flex-wrap items-center justify-center md:justify-between py-3 border-b">
                    <div className="w-full md:w-1/4 mb-2 md:mb-0">
                        <a href="/" className="inline-flex text-blue-600 font-bold no-underline">
                            <img src={openIpImage} alt="openIP image" className="w-28"/>
                        </a>
                    </div>
                    <ul className="flex w-full justify-center md:w-auto mb-2 md:justify-start md:mb-0">
                        <li><a href="/" className="px-4 text-gray-600 hover:text-gray-800">Home</a></li>
                        <li><a href="/about" className="px-4 text-gray-600 hover:text-gray-800">회사소개</a></li>
                        <li><a href="/price" className="px-4 text-gray-600 hover:text-gray-800">서비스안내</a></li>
                        <li><a href="/tm-file" className="px-4 text-gray-600 hover:text-gray-800">상표출원하기</a></li>
                    </ul>
                    {loggedIn? <LoginSignup/> : <LogoutMypage loginLogoutHandler={loginLogoutHandler}/>}
                    
                </header>
            </div>
        </div>
    );
}


function LoginSignup() {
    return (
        <div className="w-full md:w-1/4 text-right">
            <button type="button" className="border border-blue-500 text-slate-500 px-4 py-2 mr-2 rounded hover:bg-blue-500 hover:text-white transition" >
                <a href="/login" className="no-underline">Login</a>
            </button>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                <a href="/register" className="no-underline">Sign-up</a>
            </button>
        </div>
    );
}

function LogoutMypage({ loginLogoutHandler }: AuthButtonProps) {
    return (
        <div className="w-full md:w-1/4 text-right">
            <button type="button" className="border border-blue-500 text-slate-500 px-4 py-2 mr-2 rounded hover:bg-blue-500 hover:text-white transition" onClick={loginLogoutHandler}>
                {/* <a href="/logout" className="no-underline" >Logout</a> */}
                logout
            </button>
            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                <a href="/manage" className="no-underline">mypage</a>
            </button>
        </div>
    );
}
