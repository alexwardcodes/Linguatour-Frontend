import React from 'react' 
import vocab from "./vocab";
import "./App.css";
import Box from "./Box";
import Scramble from "./Scramble"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from './Signup';

export default function App() {
  return (
    <div className="App">
      <div className="home">
        <Router>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/box">Box Game</Link>&nbsp;
          <Link to="/scramble">Scramble Game</Link>&nbsp;
          <Routes>
            <Route path="/" element={<Home></Home>}>
              Home
            </Route>
            <Route path="/box" element={<Box vocab={vocab}></Box>}>
              Box game
            </Route>
            <Route path="/scramble" element={<Scramble vocab={vocab}></Scramble>}>
              Scramble game
            </Route>
            <Route path="/signup" element={<Signup></Signup>}>
              Signup
            </Route>
            <Route path="/login" element={<Login></Login>}>
              Login
            </Route>
            
          </Routes>
        </Router>
      </div>
    </div>
  );
}
