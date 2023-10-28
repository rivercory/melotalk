import React from 'react';
import Button from 'react-bootstrap/Button';
import '../css/board.css'
import BoardCard from '../components/boardcard';

const Board = () => {
    return (
        <div>
            <div style={{ float: 'right', margin: '1rem' }}>
            <Button style={{ fontFamily: 'Pretendard-Regular', fontWeight: 'bold', fontSize: '18px', border: 0, backgroundColor: '#364fc7' }}>그룹 생성하기</Button>
            </div>
            <div style={{ clear: 'both' }}>
            <BoardCard />
            </div>
        </div>
    );
} 

export default Board