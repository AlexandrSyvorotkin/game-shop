import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import React, {useState} from "react";
import Header from "./components/Header/Header";
import GamePage from "./pages/GamePage/GamePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import StartPage from "./pages/StartPage/StartPage";

function App() {

    const [enterShop, setEnterShop] = useState(false)

    const enterShopHandler = () => {
        setEnterShop(true)
    }

    return (
        <div className='App'>
            {enterShop
            ?       <>
                        <Header/>
                            <Routes>
                                <Route path='/' element={<HomePage/>}/>
                                <Route path='/app/:title' element={<GamePage/>}/>
                                <Route path='/order' element={<OrderPage/>}/>
                            </Routes>
                    </>
                : <StartPage enterShopHandler={enterShopHandler}/>
            }


        </div>
    );
}

export default App;
