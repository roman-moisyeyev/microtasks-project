import React from "react";

type NewComponent2Type= {
    currentMoney: Array<MoneyType>
    callBack: () => void
}

type MoneyType={
    banknots:string,
    value:number,
    number:number,
}
export const NewComponent2 = (props:NewComponent2Type) => {
    const onClickFilterHandler = ()=>{
        props.callBack()
    }

    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoney, index) => {
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
                <button onClick={() => onClickFilterHandler()}>all</button>
                <button onClick={() => onClickFilterHandler()}>RUBLS</button>
                <button onClick={() => onClickFilterHandler()}>dollar</button>
            </div>
        </>
    )
}