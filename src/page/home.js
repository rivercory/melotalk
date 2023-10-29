import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../css/home.css'

const Home = () => {
    return (
        <div className="home-hero">
            <p align="middle">
                <div>
                    <h1 style={{ fontSize: '5rem', fontFamily: 'Pretendard-Regular' }}>음악에 대해서 얘기해 봐요.</h1>
                    <Link to="/group">
                        <Button style={{ fontFamily: 'SUITE-Regular', fontSize: '28px', backgroundColor: '#364fc7', border: 0 }} size="lg">
                            시작하기
                        </Button>
                    </Link>
                </div>
            </p>
        </div>
    );
}

export default Home