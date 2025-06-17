import React from "react";
import LoginControl from "./LoginControl.jsx";
import Greetings from "./Greetings.jsx";
import Product from "./Product.jsx";
import TodoList from "./Todolist.jsx";
import Test from "./Test.jsx"
import Card from "./Card"
import ANXIETY from "./assets/ANXIETY.jpg"
import Stress from "./assets/Stress.jpg"
function App() {
  return (
    <div>
      <Card 
        image={ANXIETY} 
        name="Anxiety" 
        about="This is Anxiety." 
      />
      
      <Card 
        image={Stress} 
        name="Stress" 
        about="This is Stressed MONKEE." 
      />
      <br />
      <Greetings />
      
      <LoginControl />
      <br />
      <Product/>
      <br />
      <TodoList/>
      <br />
      <Test/>
    </div>
  );
}
export default App;
