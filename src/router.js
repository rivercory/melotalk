import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Group from './page/group';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/group" element={<Group />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router