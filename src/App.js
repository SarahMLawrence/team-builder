import React, {useState} from 'react';
import './App.css'

import background from './background.png'

import MemberForm from './components/MemberForm';
import Member from './components/Member';


function App() {

  const [memberState, setMemberState] = useState([
    {
      id: "1",
      name: "Sarah Lawrence",
      email: "sarah@gmail.com",
      role: "Full Stack Web Developer"
      
    }
  ]);

  const addMemberHandler = newMember => {
    console.log("adding member", newMember);
    setMemberState([...memberState, newMember]);
  };


  
  return (
    <div className="App" styles={{ backgroundImage: `url(${background})`}} >
      <MemberForm addMember={addMemberHandler} />
      <Member members={memberState}/>
    </div>
  );
}

export default App;
