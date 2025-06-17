import { useState } from "react"; // Import useState
import ANXIETY from "./assets/ANXIETY.jpg"
function Card(p) {
  const [count, setCount] = useState(0); // Initialize count with useState

  const handleVote = () => {
    setCount(count + 1); // Increment count on click
  };

  return (
    <div className="card">
      <img className="card-image" src={p.image} alt="Profile picture" />
      <h2 className="card-title">Name: {p.name}</h2>
      <p className="card-text">About: {p.about}</p>
      <button className="button" onClick={handleVote}>
        Click To vote ({count}) {/*  Display current votes */}
      </button>
    </div>
  );
}

export default Card;