import React from "react";
import './NewComponent.css';


export const NewComponent = () => {

    const topCars = [
        {manufacturer: "BMW", model: 'm5cs'},
        {manufacturer: "Mercedes", model: 'e63s'},
        {manufacturer: "ZAZ", model: 'Vida'},
        {manufacturer: "Audi", model: 'rs6'},
        {manufacturer: "Scion", model: 'FR-s'},
        {manufacturer: "Mercedes", model: 'A 190'},
        {manufacturer: "Audi", model: 'rs6'},
        {manufacturer: "Mercedes", model: 'e63s'},
        {manufacturer: "Dodge", model: 'Challenger'},
    ]

    return (
        <>
        <table>
            <tr >
                <th>#</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
                {topCars.map((cars,index) => {
                    return (
                        <tr key={index}>
                            <th >{index+1}</th>
                            <th>{cars.manufacturer}</th>
                            <th>{cars.model}</th>
                        </tr>

                    )

                })}
            </table>


        </>
    )
}