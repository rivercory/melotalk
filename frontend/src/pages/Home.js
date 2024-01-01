import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className='App'>
            <div className="hero min-h-screen"
                 style={{backgroundImage: 'url(https://i.ibb.co/qykK43c/20134800-6242512.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/dashboard">
                            <button className="btn bg-primary border-0 text-white hover:text-black text-2xl suit">시작하기
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>)
}

export default Home;