import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'

const Home = () => {
    return (
        <div className="home-hero">
            <p align="middle">
                <div>
                    <h1 style={{ fontSize: '5rem', fontFamily: 'Pretendard-Regular' }}>음악에 대해서 얘기해 봐요.</h1>
                    <Link to="/group">
                        <button class="btn btn-lg" style={{ fontFamily: 'Pretendard-Regular', fontSize: '2rem', backgroundColor: '#364FC7', color: '#FFFFFF' }}>시작하기</button>
                    </Link>
                </div>
            </p>
        </div>
    );
}

export default Home