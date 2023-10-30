import React from 'react';
import '../css/board.css'

const Board = () => {
    return (
        <div>
            <div style={{ float: 'right', margin: '1rem' }}>
                <button className="btn" style={{ fontFamily: 'Pretendard-Regular', fontWeight: 'bold', fontSize: '18px', backgroundColor: '#364fc7', color: '#FFFFFF', marginRight: '0.5rem' }}>그룹 생성하기</button>
                <button className="btn" style={{ fontFamily: 'Pretendard-Regular', fontWeight: 'bold', fontSize: '18px', backgroundColor: '#364fc7', color: '#FFFFFF' }}>코드 입력하기</button>
            </div>
            <div className="break-all" style={{ clear: 'both', margin: '1rem' }}>
                <h1 className="text-5xl" style={{ fontFamily: 'NanumSquareNeo-Variable', fontWeight: 'bold' }}>DEVELOPER'S CHOICE✨</h1>
                <h5 className="mt-4 text-2xl" style={{ fontFamily: 'LINESeedKR-Bd', marginBottom: '1rem' }}>멜로톡 개발자가 직접 고른 그룹들입니다.</h5>
            </div>
        </div>
    );
}

export default Board