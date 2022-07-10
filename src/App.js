import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home-page";
import React from "react";
import Header from "./components/Header";

function App() {

    return (
        <div className='w-[1180px] m-auto p-10 pt-0 text-white'>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
