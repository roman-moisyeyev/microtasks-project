import React, {FC} from "react";


type FooterType={
    titleForFooter:string
}
export const Footer:FC<FooterType> =(props)=> {

    return (
        <div>
            {props.titleForFooter}
        </div>
    )
}