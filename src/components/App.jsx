import React, { useState } from "react";

function App() {

  setInterval(increse, 1000);
  const now =new Date().toLocaleTimeString()
  
  const [count,setCount] = useState(now);

  function increse(){
    const now1 =new Date().toLocaleTimeString();
    setCount(now1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      {/* <button onClick={increse}>Get Time</button> */}
    </div>
  );
}

export default App;

// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);