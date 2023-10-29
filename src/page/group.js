import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/board.css'

const Board = () => {
    return (
        <div>
            <div style={{ float: 'right', margin: '1rem' }}>
                <Button style={{ fontFamily: 'Pretendard-Regular', fontWeight: 'bold', fontSize: '18px', border: 0, backgroundColor: '#364fc7', marginRight: '0.5rem' }}>그룹 생성하기</Button>
                <Button style={{ fontFamily: 'Pretendard-Regular', fontWeight: 'bold', fontSize: '18px', border: 0, backgroundColor: '#364fc7' }}>코드 입력하기</Button>
            </div>
            <div style={{ clear: 'both', margin: '1rem' }}>
                <h1 style={{ fontFamily: 'NanumSquareNeo-Variable', fontWeight: 'bold' }}>DEVELOPER'S CHOICE✨</h1>
                <h5 style={{ fontFamily: 'LINESeedKR-Bd', marginBottom: '1rem' }}>멜로톡 개발자가 직접 고른 그룹들입니다.</h5>
                <Row xs={1} md={4} className="g-2">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col key={idx}>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}

export default Board