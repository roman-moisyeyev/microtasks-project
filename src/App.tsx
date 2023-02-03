import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {Button} from "./components/Button";


function App() {
let [a,setA]=useState(1)

    const onclickHandler = ()=>{
    setA(++a)

        console.log(a)
    }

    const onclickNullHandler =()=>{
   setA(a=0)
    }
    return (
        <div className='App'>

<h1>{a}</h1>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickNullHandler}>0</button>
        </div>
    );
}

export default App;
