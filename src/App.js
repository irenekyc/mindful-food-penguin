import React from 'react';
import NavBar from './components/NavBar/NavBar'
import Home from './containers/Home'
import Search from './components/Search/Search'
import Categories from './containers/Categories'
import Topic from './containers/Topic'
import Footer from './components/Footer/Footer'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search}/>
      <Route path="/categories" exact component={Categories} />
      <Route path="/categories/:topic" component={Topic} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
