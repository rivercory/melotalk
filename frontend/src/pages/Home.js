import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className='App'>
            <div className="hero min-h-screen"
                 style={{backgroundImage: 'url(https://i.ibb.co/qykK43c/20134800-6242512.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content suit">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">Melotalk, 멜로디에 대해 이야기해 봐요.</h1>
                        <p className="mb-5">멜로톡은 국내 최대의 음악 커뮤니티입니다.</p>
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