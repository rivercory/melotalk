import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Board from './page/board';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/board" element={<Board />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router