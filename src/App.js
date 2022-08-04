import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import React from "react";
import Header from "./components/Header/Header";
import GamePage from "./pages/GamePage/GamePage";

function App() {

    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/app/:title' element={<GamePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
