import React from "react";

type HeaderType ={
    title:string
}

 export const Header: React.FC<HeaderType> = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}

