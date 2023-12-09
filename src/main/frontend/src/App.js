import './App.css';
import Home from './pages/Home';
import {Link, Route, Routes} from 'react-router-dom';
import { IoHomeOutline, IoListOutline, IoDocumentOutline } from "react-icons/io5";
import {HiMenu, HiOutlineSearch, HiOutlineInbox} from "react-icons/hi";
import Dashboard from "./pages/Dashboard";

function App() {
    var agent = navigator.userAgent.toLowerCase();

    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        console.log("ExplorerDetected");
        window.close();
    }

    return (
        <div className="relative h-screen">
            <div className="navbar bg-base-100 md:block hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <HiMenu size={32}/>
                        </div>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 suit">
                            <li className="menu-title">멜로톡</li>
                            <li><Link to="/">홈</Link></li>
                            <li><Link to="/dashboard">대시보드</Link></li>
                            <li><a>About</a></li>
                            <li className="menu-title">We are melotalk family</li>
                            <li><a href="https://melotalk.vercel.app">멜로톡</a></li>
                            <li><a href="https://teenagercode.vercel.app">틴에이저코드</a></li>
                            <li><a href="https://devlist-five.vercel.app">데브리스트</a></li>
                            <li><a href="https://governmentplus.vercel.app">정부플러스</a></li>
                            <li><a href="https://toolking.vercel.app">툴킹</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl cafe24ohsquareair text-primary">
                        <img src="./icons/melotalk_full.svg" width="26" height="26"/>
                        멜로톡
                    </a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <HiOutlineSearch size={32}/>
                    </button>
                </div>
            </div>
            <div className="btm-nav md:hidden">
                <Link to="/about">
                    <button className="suit grid place-items-center">
                        <IoDocumentOutline size={32}/>
                        <span className="btm-nav-label">소개</span>
                    </button>
                </Link>
                <Link to="/">
                    <button className="suit grid place-items-center">
                        <IoHomeOutline size={32}/>
                        <span className="btm-nav-label">홈</span>
                    </button>
                </Link>
                <Link to="/dashboard">
                    <button className="suit grid place-items-center">
                        <IoListOutline size={32}/>
                        <span className="btm-nav-label">대시보드</span>
                    </button>
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
            <a href="https://hyeonho2010.vercel.app">
                <div
                    className="absolute bg-gray-200 text-xs m-4 p-2 hidden md:block rounded-md bottom-0 right-0">
                    Copyright 2023. 강현호 all rights reserved.
                </div>
            </a>
        </div>
    );
}

export default App;
