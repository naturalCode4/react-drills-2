import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import AlertButton from './components/AlertButton';
import Greeting from './components/Greeting';
import Greeting2 from './components/Greeting2';
import SearchList from './components/SearchList';
import AccordianHolder from './components/accordian/AccordianHolder'
import {GetUsers} from './components/APIRequest';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Drills
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="Body">
        <div className="Container">
          <Counter/>
          <AlertButton/>
          <Greeting/>
          <Greeting2/>
          <SearchList/>
          <AccordianHolder/>
          <GetUsers/>
          <Login/>
        </div>
      </div>
    </div>
  );
}

export default App;
