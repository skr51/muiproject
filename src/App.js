import React from 'react'
import UserList from './users/userList';
import Home from "./users/home"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './users/addUser';
import EditUser from './users/editUser';
import Navmui from './sidebar/navmui';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <Navmui/>
      <Container>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/user-list' element={<UserList />}/>
        <Route path='/add-user' element={<AddUser />}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>
      </Routes>
      </Container>
      
    </div>
  )
}

export default App;
