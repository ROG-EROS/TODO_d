import React,{ useEffect } from "react";
import Navbar from "./comoponents/Navbar/Navbar";
import Home from "./comoponents/Home/Home"
import Footer from "./comoponents/Footer/Footer";
import About from "./comoponents/About/About";
import Signup from "./comoponents/signup/Signup";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Signin from "./comoponents/signup/Signin";
import Todo from "./comoponents/todo/Todo";
import { useDispatch } from 'react-redux';
import { authActions } from "./store";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
    // eslint-disable-next-line
  }, []);
  return (<div>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
    <Footer />
  </div>
  );
};

export default App;