import {useState} from 'react'

function Greeting2() {

    const [name, setName] = useState('')
    const [greeting, setGreeting] = useState('')

    return (
        <div>
            <h1>Greeting2</h1>
            <input 
                type="text" 
                placeholder="What is your name?" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button 
                onClick={() => {
                    if (name) setGreeting(`Hello ${name}! Welcome!`)
                    setName('')
                }}
            >Greet me!</button>
            <button 
                onClick={() => {
                    setGreeting('Lets get you a new greeting!')
                    setName('')
                }}
            >Remove greeting</button>
            <p>{greeting}</p>
        </div>
    )
}

export default Greeting2