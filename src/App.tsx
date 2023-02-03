import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";


function App() {
 const onClickHandler=(name:string)=>{

     console.log (name)
 }
    const myFirstSubscriber=(e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log("hello i am Vasiliy")
    }
    const mySecondSubscriber=(e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log("hello i am IVAN")
    }


    return (
        <div className='App'>

        <button onClick={(event)=>onClickHandler("VASYA")}>MyYoutubeChannel-1</button>
        <button onClick={(event)=>onClickHandler("NIKOLAS")}>MyYoutubeChannel-2</button>


        </div>
    );
}

export default App;
