import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import React from "react";
import Header from "./components/Header/Header";

function App() {

    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
