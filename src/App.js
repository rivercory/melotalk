import './App.css';
import Home from './pages/Home';
import {Link, Route, Routes} from 'react-router-dom';
import { HiMenu, HiOutlineSearch, HiOutlineInbox } from "react-icons/hi";
import Dashboard from "./pages/Dashboard";

function App() {
    var agent = navigator.userAgent.toLowerCase();

    if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
        console.log("ExplorerDetected");
        window.close();
    }

    return (
        <div className="relative h-screen">
            <div className="navbar bg-base-100 md:block hidden">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <HiMenu size={32} />
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
                        <HiOutlineSearch size={32} />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <HiOutlineInbox size={32} />
                    </button>
                </div>
            </div>
            <div className="btm-nav md:hidden">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                    </svg>
                    <span className="btm-nav-label">Home</span>
                </button>
                <button className="active">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span className="btm-nav-label">Warnings</span>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                    <span className="btm-nav-label">Statics</span>
                </button>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
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
