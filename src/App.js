import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Team from './Team';

function App() {
  const [memberState, setMemberState] = useState([
    {
      name: "Sarah Lawrence",
      email: "sarahlawrence1152@gmail.com",
      role: "Full Stack Web Developer"
      
    }
  ]);

  const addTeamHandler = newMember => {
    console.log("adding member", newMember);
    setMemberState([...memberState, newMember]);
  }
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Member</h1>
        

        <Form addMember={addTeamHandler}/>
        <Team notes={memberState}/>



      </header>
    </div>
  );
}

export default App;
