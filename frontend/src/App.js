import "./App.css";
import Home from "./pages/Home";
import { Link, Route, Routes } from "react-router-dom";
import {
  IoHomeOutline,
  IoListOutline,
  IoDocumentOutline,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

function App() {
  var agent = navigator.userAgent.toLowerCase();
  
  if (
    (navigator.appName == "Netscape" &&
      navigator.userAgent.search("Trident") != -1) ||
    agent.indexOf("msie") != -1
  ) {
    console.log("ExplorerDetected");
    window.close();
  }

  return (
    <div>
      <div className="navbar fixed top-0 z-10 bg-gradient-to-r from-[#3b5bdb] to-[#748ffc] md:block hidden">
        <div className="navbar-start">
          <Link
            to="/"
            className="btn btn-ghost text-2xl cafe24ohsquareair text-white"
          >
            <img src="icons/white/melotalk_full.svg" width="26" height="26" />
            멜로톡
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <IconContext.Provider value={{ color: "white" }}>
              <HiOutlineSearch size={32} />
            </IconContext.Provider>
          </button>
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <IconContext.Provider value={{ color: "white" }}>
                <HiMenu size={38} />
              </IconContext.Provider>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content dropdown-end z-[1] p-1 shadow bg-base-100 rounded-box w-52 suit"
            >
              <li className="menu-title">멜로톡</li>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/dashboard">대시보드</Link>
              </li>
              <li>
                <a>About</a>
              </li>
              <li className="menu-title">Melotalk Universe</li>
              <li>
                <a href="https://melotalk.vercel.app">멜로톡</a>
              </li>
              <li>
                <a href="https://teenagercode.vercel.app">틴에이저코드</a>
              </li>
              <li>
                <a href="https://devlist-five.vercel.app">데브리스트</a>
              </li>
              <li>
                <a href="https://governmentplus.vercel.app">정부플러스</a>
              </li>
              <li>
                <a href="https://toolking.vercel.app">툴킹</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btm-nav md:hidden z-10">
        <Link to="/about">
          <button className="suit grid place-items-center">
            <IoDocumentOutline size={32} />
            <span className="btm-nav-label">소개</span>
          </button>
        </Link>
        <Link to="/">
          <button className="suit grid place-items-center">
            <IoHomeOutline size={32} />
            <span className="btm-nav-label">홈</span>
          </button>
        </Link>
        <Link to="/dashboard">
          <button className="suit grid place-items-center">
            <IoListOutline size={32} />
            <span className="btm-nav-label">대시보드</span>
          </button>
        </Link>
      </div>
      <div className="md:mt-16 mt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <footer className="md:mb-0 mb-14 -z-1 footer md:p-10 p-6 bg-gray-100 text-base-content suit">
        <aside>
          <img
            src="./icons/primary/melotalk_transparent.svg"
            width="50"
            height="50"
          />
          <p className="text-xl pretendard text-primary">Melotalk</p>
          <p>Providing reliable tech since 1992</p>
        </aside>
        <nav>
          <header className="footer-title">Melotalk</header>
          <Link to="/" className="link link-hover">
            홈
          </Link>
          <Link to="/dashboard" className="link link-hover">
            대시보드
          </Link>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Melotalk Universe</header>
          <a href="https://melotalk.vercel.app" className="link link-hover">
            멜로톡
          </a>
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
