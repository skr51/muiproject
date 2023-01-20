import React from 'react'
import UserList from './users/UserList';
import Home from "./users/home"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/user-list' element={<UserList />}/>
        <Route path='/add-user' element={<AddUser />}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>
      </Routes>
      
    </div>
  )
}

export default App;
