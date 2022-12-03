import {useState} from 'react'

let validLoginInfo = {
    'AdinKramer': {user: 'AdinKramer',
    pwd: 'Towardslight2+',
    name: 'Adin Kramer'},
    'naturalcode4@gmail.com': {user: 'naturalcode4@gmail.com',
    pwd: 'Towardslight',
    name: 'naturalcode4'},
    'theonetruedin': {user: 'theonetruedin',
    name: 'True Din',
    pwd: 'buttlickers'},
    'pete': {user: 'pete',
    name: 'Pete',
    pwd: 'pete'}
}

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const [loginMode, setLoginMode] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    const [displayMessage, setDisplayMessage] = useState('')

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (validLoginInfo[username] && validLoginInfo[username].pwd && repeatPassword === password) {
            setLoginMode(false)
            setLoggedIn(true)
            setDisplayMessage('')
        } else {
            setDisplayMessage('Invalid login credentials. Please try again')
        }
    }

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        if (validLoginInfo[username]) {
            setDisplayMessage('That username is already taken. Please try another')
        } else if (!username || !password || !repeatPassword ){
            setDisplayMessage('You must fill out all criteria to create an account')
        }
        else {
            validLoginInfo[username] = {user: username, name: username, pwd: password}
            setDisplayMessage(`You created an account, ${username}`)
            setUsername('')
            setPassword('')
            setRepeatPassword('')
        }
    }
    
    return (
        <div>
            <h1>Login</h1>
            {(loginMode) && <div>
                <label for='username'>Username:</label>
                <br></br>
                <input
                    name='username'
                    placeholder='enter your username'
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                />
                <br></br><br></br>
                <label for='password'>Password:</label>
                <br></br>
                <input
                    name='password'
                    type='password'
                    placeholder='enter your password'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <br></br><br></br>
                <label for='repeat'>Confirm your password:</label>
                <br></br>
                <input
                    name='repeat'
                    type='password'
                    placeholder='confirm your password'
                    value={repeatPassword}
                    onChange={event => {console.log(repeatPassword); setRepeatPassword(event.target.value)}}
                />
                <br></br><br></br>
                <button
                    onClick={e => handleLoginSubmit(e)}
                >Log in
                </button>
                <button
                    onClick={e => handleSignupSubmit(e)}
                >Create a new account
                </button>
            </div>}
            {loggedIn && <div>
                <p>Welcome {validLoginInfo[username].name}!</p>
                <button onClick={() => {
                    setLoginMode(true)
                    setLoggedIn(false)
                    setUsername('')
                    setPassword('')
                    setRepeatPassword('')
                }}>Log Out</button>
            </div>}
            {displayMessage && <div>
                <p>{displayMessage}</p>
            </div>}
        </div>
    )
}

export default Login