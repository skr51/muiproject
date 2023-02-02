import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {  NavLink, useNavigate } from "react-router-dom";
import { deleteUser , deleteUserList, getUsers } from "../features/user/userSlice";





const UserList=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
  const {users}=useSelector (state=>state.user);

        useEffect(()=>{
         
            dispatch(getUsers());
            
        },[dispatch])
        
     
        const handleRemoveUser=(id)=>{
            if (window.confirm("Are you sure you want to delete this tour ?")) {
            dispatch(deleteUser(id)).unwrap().then(()=>{
                dispatch(getUsers());
                
            })
            }
           };
           const handleEdit=(id)=>{
            navigate(`/edit-user/${id}`)
           };

return(
    <div>
        <div className="main-hdg" ><h1>curd view operation</h1></div>
     <h1>WELCOME HOME</h1>
     <table>
         <thead>
             <tr>
                 <th>name</th>
                 <th>mail</th>
                 <th>mobile</th>
                 <th>action</th>
             </tr>
         </thead>
         <tbody>
             {users.length>0 ? (
                 users.map((user,index)=>(
                     <tr key={index}>
                     <td>{user.username}</td>
                     <td>{user.email}</td>
                     <td className="number-list">{user.mobile_number}</td>
                  
                     <td>
                     <button  className="ed-botton" onClick={()=>handleEdit(user._id)}>edit</button>
                   
                     <button onClick={()=>handleRemoveUser(user._id)} className="ed-botton">delete</button>
                     </td>
                 </tr>
 
                 ))
             ):(<tr colSpan={4}>on data</tr>)}
            
         </tbody>
     </table>
    <NavLink to="/add-user">
     <button>Adduser</button></NavLink>
     </div>
) };
 
export default UserList;