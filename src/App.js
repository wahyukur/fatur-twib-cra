import './assets/css/app.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route path="/login" element={<SignIn/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
