import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigators from "./components/Navigate";
import Filter from "./components/Filter";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from "./components/Info";
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Main1 />} />
          <Route path="/search" element={<Main2 />} />
          <Route path="/info" element={<Info />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
