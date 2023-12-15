import './App.css';
import Home from './pages/Home';
import {Link, Route, Routes} from 'react-router-dom';
import {IoHomeOutline, IoListOutline, IoDocumentOutline} from "react-icons/io5";
import {HiMenu, HiOutlineSearch, HiOutlineInbox} from "react-icons/hi";
import Dashboard from "./pages/Dashboard";

function App() {
    var agent = navigator.userAgent.toLowerCase();

    if ((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        console.log("ExplorerDetected");
        window.close();
    }

    return (
        <div>
            <div className="md:h-screen min-h-screen md:overflow-auto scrollbar-hide h-auto">
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
                <div className="p-4">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                    </Routes>
                </div>
            </div>
            <footer className="md:mb-0 mb-14 footer md:p-10 p-6 bg-gray-100 text-base-content">
                <aside>
                    <img src="./icons/melotalk_transparent.svg" width="50" height="50"/>
                    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
}

export default App;
