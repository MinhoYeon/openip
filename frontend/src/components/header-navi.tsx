import { useEffect, useState } from "react";
import openIpImage from '../assets/openip.jpg';
import axios from "axios";
import { serverURL } from "@/api/config";
import { useNavigate } from "react-router-dom";
import useAccessTokenStore from "@/store/accessTokenStore";


export default function HeaderNavi() {

    const accessToken = useAccessTokenStore((state) => state.accessToken);
    // const updateAccessToken = useAccessTokenStore((state) => state.updateAccessToken);
    const resetAccessToken = useAccessTokenStore((state) => state.reset);

    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        if (accessToken !== '') {
            setLoggedIn(false);
        } else {
            setLoggedIn(true);
        }
    },[accessToken])


    const navigate = useNavigate()
    const onClickLogoutHandler = async () => {
        try {
            await axios.post(`${serverURL}/user/logout`);
            console.log('before', accessToken);

            resetAccessToken();
            console.log('after',accessToken);
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
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
                    {loggedIn
                    ?   <div className="w-full md:w-1/4 text-right">
                            <button type="button" className="border border-blue-500 text-slate-500 px-4 py-2 mr-2 rounded hover:bg-blue-500 hover:text-white transition" >
                                <a href="/login" className="no-underline">Login</a>
                            </button>
                            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                <a href="/register" className="no-underline">Sign-up</a>
                            </button>
                        </div> 
                    :   <div className="w-full md:w-1/4 text-right">
                            <button 
                                type="button" 
                                className="border border-blue-500 text-slate-500 px-4 py-2 mr-2 rounded hover:bg-blue-500 hover:text-white transition" 
                                onClick={onClickLogoutHandler}>
                                logout
                            </button>
                            <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                                <a href="/manage" className="no-underline">mypage</a>
                            </button>
                        </div>
                    }
                    
                </header>
            </div>
        </div>
    );
}


// function LoginSignup() {
//     return (
//         <div className="w-full md:w-1/4 text-right">
//             <button type="button" className="border border-blue-500 text-slate-500 px-4 py-2 mr-2 rounded hover:bg-blue-500 hover:text-white transition" >
//                 <a href="/login" className="no-underline">Login</a>
//             </button>
//             <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 <a href="/register" className="no-underline">Sign-up</a>
//             </button>
//         </div>
//     );
// }

// function LogoutMypage({ onClickLogoutHandler }) {
//     return (
//         <div className="w-full md:w-1/4 text-right">
//             <button 
//                 type="button" 
//                 className="border border-blue-500 text-slate-500 px-4 py-2 mr-2 rounded hover:bg-blue-500 hover:text-white transition" 
//                 onClick={onClickLogoutHandler}>
//                 logout
//             </button>
//             <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                 <a href="/manage" className="no-underline">mypage</a>
//             </button>
//         </div>
//     );
// }
