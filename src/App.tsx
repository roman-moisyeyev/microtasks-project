import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {Button} from "./components/Button";


function App() {
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log("hello, I'm stupid button ")
    }


    return (
        <div className='App'>

            {/*<button>MyYoutubeChannel-1</button>*/}
            {/*<button>MyYoutubeChannel-2</button>*/}
            < Button name={"YoutubeChannel_1"} callBack={() => Button1Foo('i am Vasya', 21)}/>
            < Button name={"YoutubeChannel_2"} callBack={() => Button2Foo('i am Ivan')}/>
            < Button name={"stupid button"} callBack={Button3Foo}/>


        </div>
    );
}

export default App;
