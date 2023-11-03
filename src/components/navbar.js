import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BsMoonStars, BsSun, BsBell } from "react-icons/bs";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <span style={{ fontFamily: 'NanumSquareNeo-Variable', color: '#364FC7' }}>멜로톡</span>
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <label className="swap swap-rotate w-12 h-12">
              <input type="checkbox" onChange={handleToggle}
                checked={theme === "light" ? false : true} />
              <BsSun alt="light" className="w-6 h-6 swap-on" />
              <BsMoonStars alt="dark" className="w-6 h-6 swap-off" />
            </label>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BsBell className="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;