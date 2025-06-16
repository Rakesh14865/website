import React from 'react';

const Greetings = () => {
  const now = new Date();
  const hour = now.getHours();

  let greeting;
  let showTime = false;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
    showTime = true;
  }

  return (
    <div>
      <h1>{greeting}</h1>
      {showTime && <p>Current time: {now.toLocaleTimeString()}</p>}
    </div>
  );
};

export default Greetings;
