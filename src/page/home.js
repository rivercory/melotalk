import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react";
import '../css/home.css'

const Home = () => {
    return (
        <div className="home-hero">
            <p align="middle">
                <div>
                    <h1 style={{ fontSize: '5rem', fontFamily: 'Pretendard-Regular' }}>음악에 대해서 얘기해 봐요.</h1>
                    <Link to="/board">
                        <Button style={{ fontFamily: 'SUITE-Regular' }} fontSize='28px' bg='#dbe4ff' borderColor='#bac8ff' color='#364fc7' variant='outline' size='lg'>
                            시작하기
                        </Button>
                    </Link>
                </div>
            </p>
        </div>
    );
}

export default Home