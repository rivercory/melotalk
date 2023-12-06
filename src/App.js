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
            <div className="navbar bg-base-100">
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
                    <a className="btn btn-ghost text-2xl cafe24ohsquareair">
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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <div className="absolute bottom-0 right-0 m-4 p-2">
                e
            </div>
        </div>
    );
}

export default App;
