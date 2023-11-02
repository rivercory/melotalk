import React from 'react';
import '../css/board.css'

const Board = () => {
    return (
        <div>
            <div style={{ float: 'right', margin: '1rem' }}>
                <button className="btn border-0 pretendard" style={{ fontWeight: 'bold', fontSize: '18px', backgroundColor: '#364fc7', color: '#FFFFFF', marginRight: '0.5rem' }}>그룹 생성하기</button>
                <button className="btn border-0 pretendard" style={{ fontWeight: 'bold', fontSize: '18px', backgroundColor: '#364fc7', color: '#FFFFFF' }}>코드 입력하기</button>
            </div>
            <div className="md:m-4 m-2" style={{ clear: 'both' }}>
                <h1 className="md:text-5xl text-2xl" style={{ fontFamily: 'NanumSquareNeo-Variable', fontWeight: 'bold' }}>DEVELOPER'S CHOICE✨</h1>
                <h5 className="md:mt-4 mt-2 md:text-2xl text-xl" style={{ fontFamily: 'LINESeedKR-Bd' }}>멜로톡 개발자가 직접 고른 그룹들입니다.</h5>
            </div>
        </div>
    );
}

export default Board