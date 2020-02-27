import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Members from './components/Members';
import Form from './components/Form';
import {Route, Link, useHistory} from 'react-router-dom';
import styled from 'styled-components';

let Logo = styled.a`
:hover {
  cursor: pointer;
}
`;

function App() {
  let history = useHistory();
  let routeHome = () => (
    history.push('/')
  )

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
        <Logo className='home-button' onClick={routeHome}><img src={logo} className="App-logo" alt="logo" /></Logo>
        <Route exact path='/'>
          <Form addNewMember={addNewMember}/>
          <Link to='/members'>
            <button>View All Members</button>
          </Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Route>

        <Route path='/members'>
          <Members members={members}/>
        </Route>
      </header>
    </div>
  );
}

export default App;
