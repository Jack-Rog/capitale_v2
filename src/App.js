import logo from './logo.svg';
import './App.css';
import CountryImage from "./components/CountryImage.js";
import UserInput from './components/UserInput';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This is header space
      </header>

      <body className='App-body'>

        <CountryImage/>
        
        <GameBoard />
        
        <UserInput/>
      </body>
        

    </div>
  );
}

export default App;
