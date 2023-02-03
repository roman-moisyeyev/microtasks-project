import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {Button} from "./components/Button";

type FilterType= 'all'|'RUBLS'|'dollar'
function App() {
    const [money, setMoney] = useState([
        {banknots: ' Dollars ', value: 100, number: ' a1234567890'},
        {banknots: ' Dollars ', value: 50, number: ' z1234567890'},
        {banknots: ' RUBLS ', value: 100, number: ' w1234567890'},
        {banknots: ' Dollars ', value: 100, number: ' e1234567890'},
        {banknots: ' Dollars ', value: 50, number: ' c1234567890'},
        {banknots: ' RUBLS ', value: 100, number: ' r1234567890'},
        {banknots: ' Dollars ', value: 50, number: ' x1234567890'},
        {banknots: ' RUBLS ', value: 50, number: ' v1234567890'},
    ])

    let currentMoney = money

    const [filter,setFilter] = useState<FilterType>("all")


    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === ' Dollars ')

    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === ' RUBLS ')

    }


    const onClickFilterHandler = (nameButton: FilterType) => {
        console.log(nameButton)
        setFilter(nameButton)


    }
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoney, index) => {
                    return (

                        <li key={index}>
                            <span>{objFromMoney.banknots}</span>
                            <span>{objFromMoney.value}</span>
                            <span>{objFromMoney.number}</span>


                        </li>
                    )

                })}

            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('all')}>all</button>
                <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>
    );
}

export default App;
