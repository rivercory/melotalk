import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'

const Home = () => {
    return (
        <div className="home-hero">
            <p align="middle">
                <div>
                    <h1 className="pretendard dark:text-white" style={{ fontSize: '5rem' }}>음악에 대해서 얘기해 봐요.</h1>
                    <Link to="/group">
                        <button className="btn btn-lg pretendard border-0" style={{ fontSize: '2rem', backgroundColor: '#364FC7', color: '#FFFFFF' }}>시작하기</button>
                    </Link>
                </div>
            </p>
        </div>
    );
}

export default Home