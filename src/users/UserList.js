import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { deleteUser } from "../features/user/userSlice";





const UserList=()=>{
    const dispatch=useDispatch();
    const users= useSelector (store=>store.users);
   
   const handleRemoveUser=(id)=>{
    console.log(id);
    dispatch(deleteUser({id}));
   }

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
                 users.map((user)=>(
                     <tr key={user.id}>
                     <td>{user.name}</td>
                     <td>{user.mail}</td>
                     <td>{user.mobile}</td>
                  
                     <td>
                     <Link to={`/edit-user/${user.id}`}>
                     <button  className="ed-botton">edit</button></Link>
                   
                     <button onClick={()=>handleRemoveUser(user.id)} className="ed-botton">delete</button>
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