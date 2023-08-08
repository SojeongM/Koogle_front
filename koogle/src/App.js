import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigators from "./components/Navigate";
import Filter from "./components/Filter";
import Main2 from './components/Main2';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Filter></Filter>
      <Main2></Main2>
    </div>
  );
}

export default App;
