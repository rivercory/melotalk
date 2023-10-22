import React from 'react';
import { Button } from "@chakra-ui/react";
import '../css/board.css'
import BoardCard from '../components/boardcard';

const Board = () => {
    return (
        <div>
            <div style={{ float: 'right', margin: '1rem' }}>
            <Button bg='#748ffc' color='#FFFFFF' style={{ fontFamily: 'Cafe24Ohsquareair' }}>그룹 생성하기</Button>
            </div>
            <div style={{ clear: 'both' }}>
            <BoardCard />
            </div>
        </div>
    );
} 

export default Board