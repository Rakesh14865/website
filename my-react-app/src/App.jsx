import React from "react";
import LoginControl from "./LoginControl.jsx";
import Greetings from "./Greetings.jsx";
import Product from "./Product.jsx";
import TodoList from "./Todolist.jsx";

function App() {
  return (
    <div>
      <Greetings />
      <LoginControl />
      <Product/>
      <TodoList/>
    </div>
  );
}

export default App;
