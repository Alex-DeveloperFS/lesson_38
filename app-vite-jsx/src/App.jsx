import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";
import React from "react";


const App = () => {

  return (
    <div className="container">
      <h1 className="title">First App-VITE</h1>
      <div className="btn-box">
        <Button className="btn" text="Submit" type="submit"/>
        <Button className="btn" text="Reset" type="reset"/>
        <Button className="btn" text="Enter" type="button"/>
      </div>
      <div>
        <Input className="input" placeholder="Enter your name"/>
      </div>
    </div>


  )
}


export default App