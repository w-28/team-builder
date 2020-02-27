import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Members from './components/Members';
import Form from './components/Form';

function App() {
  let [members, setMembers] = useState([
    {
      id: 1,
      name: 'Legacy',
      email: 'legacyrem@gmail.com',
      role: 'Wanderer',
      hobby: 'Wandering',
      favquote: 'Immortality are the markings you leave behind as a mortal'
    }
  ]);

  let addNewMember = member =>{
    let newMember = {
      id: Date.now(),
      name: member.title,
      email: member.email,
      role: member.role,
      hobby: member.hobby,
      favquote: member.favquote
    }
    setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form addNewMember={addNewMember}/>
        <Members members={members}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
