import React from 'react';
import RecipeList from './components/RecipeList.js';
import Menu from './components/Menu.js';
import './App.css';


function App() {
  return (
    <div>
      <Menu/>
      <div className="App">
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
