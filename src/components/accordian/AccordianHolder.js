// import { useState } from "react";
import Accordian from "./Accordian";

function AccordianHolder() {

    const accordianData = [
        {title: 'Data 1',
         body: 'This is the body for Data 1'
        },
        {title: 'Data 2',
         body: 'This is the body for Data 2'
        },
        {title: 'Data 3',
         body: 'This is the body for Data 3'
        },
    ]

    return (
        <div>
            <h1>Accordian</h1>
            {accordianData.map(el => {
                return <Accordian title={el.title} body={el.body}></Accordian>
            })}
        </div>
    )
}

export default AccordianHolder