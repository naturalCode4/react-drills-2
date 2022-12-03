import { useState } from "react";

function Accordian({title, body}) {

    const [isActive, setIsActive] = useState(false)

    const toggleIsActive = function() {
        if (isActive) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
        console.log('isActive', isActive)
    }

    return (
        <div style={{border: '1px solid black'}}>
            <div onClick={toggleIsActive} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '0px 20px'}}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && 
                <div>
                    {body}
                </div>
            }
        </div>
    )
}

export default Accordian