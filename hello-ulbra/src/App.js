import logo from './logo.svg';
import './App.css';
import ListFruits from './components/listComponent/listFruits';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='hello_world'>
          Hello Ulbra
        </p>
        <ListFruits/>
      </header>
    </div>
  );
}

export default App;
