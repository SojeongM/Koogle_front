import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigators from "./components/Navigate";
import Filter from "./components/Filter";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigators></Navigators>
      <Main3></Main3>
    </div>
  );
}

export default App;
