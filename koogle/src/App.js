import logo from "./logo.svg";
import Header from "./components/Header";
import Navigators from "./components/Navigate";
import Filter from "./components/Filter";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";

import Review from "./components/Review";
import Info from "./components/Info";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UseScrollToTop from "./components/UseScrollToTop";
import "./components/Font.css";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <UseScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main1 />} />
          <Route path="/search" element={<Main2 />} />
          <Route path="/info" element={<Info />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
