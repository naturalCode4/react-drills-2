import {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Counter</h1>
            <div>
                <button onClick={() => {if (count>=1) setCount(count-1)}}>
                    -
                </button>
            </div>
            <p>{count}</p>
            <div>
                <button onClick={() => setCount(count+1)}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter