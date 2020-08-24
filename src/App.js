import React from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <h2>Click on the button below to navigate</h2>
      <button className="sportsButton"><Link to="/sportsList">Sports List</Link></button>
      <button className="todoButton"><Link to="/toDo">To-Do App</Link></button>
    </>
  );
}

export default App;
