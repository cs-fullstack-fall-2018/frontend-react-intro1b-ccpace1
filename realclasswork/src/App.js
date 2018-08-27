import React, { Component } from 'react';
import './App.css';
import StudentInfo from "./StudentInfo";

class App extends Component {
  render() {
    return (
      <div className="studentInfo">
            <StudentInfo name={"Cody"} grade={"A+"}/>

      </div>
    );
  }
}

export default App;
