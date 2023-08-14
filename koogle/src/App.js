import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigators from "./components/Navigate";
import Filter from "./components/Filter";
import Main2 from "./components/Main2";
import Review from "./components/Review";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigators></Navigators>
      <Review></Review>
    </div>
  );
}

export default App;
