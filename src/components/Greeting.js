import {useState} from 'react'

function Greeting() {
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [greetingLine, setGreetingLine] = useState('greeting line')

    function formatGreeting(firstName, lastName) {
        if (firstName || lastName) {
            setGreetingLine(`Hello ${firstName + ' ' + lastName}. Good to meet you!`)
        } else {
            setGreetingLine('ooooh')
        }
    }
    
    return (
        <div>
            <h1>Greeting</h1>
            <form onSubmit={e => {
                e.preventDefault()
                formatGreeting(firstName, lastName)}}>
                <label>Enter your first name
                    <input
                        type = "text" // default type = 'text'
                        placeholder = 'first name'
                        value = {firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </label>
                <br></br>
                <label>Enter your last name
                    <input
                        type = "text" // default type = 'text'
                        placeholder = 'last name'
                        value = {lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </label>
                <br></br><br></br>
                <input type="submit" value='Get my greeting'/>
            </form>
            <p>{greetingLine}</p>
        </div>
    )
}

export default Greeting