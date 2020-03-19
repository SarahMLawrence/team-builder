import React, {useState} from 'react';
import './App.css'

import Member from './components/Member';
import MemberForm from './components/MemberForm';

function App() {

  const [memberState, setMemberState] = useState([
    {
      id: "1",
      name: "Sarah Lawrence",
      email: "sarah@gmail.com",
      role: "Full Stack Web Developer"
      
    },

    {
      id: "2",
      name: "Jay Vaughn",
      email: "jay@gmail.com",
      role: "IBM iSeries Developer"
      
    },

    {
      id: "3",
      name: "Coronavirus",
      email: "corona@gmail.com",
      role: "Virus Devloper"
      
    },



  ]);

  const addMemberHandler = newMember => {
    console.log("adding member", newMember);
    setMemberState([...memberState, newMember]);
  };

  
  return (
    
       <div className="App">

<MemberForm addMember={addMemberHandler}/>
<Member members={memberState}/>

</div>

  );
}

export default App;
