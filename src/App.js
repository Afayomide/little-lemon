import './App.css';
import Header from './components/header/header';
import { Route,Router } from 'react-router-dom';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
   <Header/>
   <Home/>
    </div>
  );
}

export default App;
