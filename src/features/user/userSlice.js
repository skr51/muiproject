import { createSlice } from '@reduxjs/toolkit'

const initialState = [
{id:1,name:"jack",mail:"jack@gmail.com",mobile:9090908855},
{id:2,name:"black",mail:"black@gmail.com",mobile:9090908866},
{id:3,name:"vasu",mail:"vasu@gmail.com",mobile:9090908877}]

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    addUser:(state,action)=>{
      
       state.push(action.payload);
    },
    editUser:(state,action)=>{
        const {id,name,mail,mobile}=action.payload;
        const existingUser = state.find(user => user.id === id);
        if(existingUser){
            existingUser.name=name;
            existingUser.mail=mail;
            existingUser.mobile=mobile;
            console.log(mail);
        }
     
    },
    deleteUser:(state,action)=>{
      const {id}=action.payload;
      const existingUser=state.find(user=>user.id===id);
      if(existingUser
        ){
          return state.filter(user=>user.id!==id);
        }
    }
  }

})


export const { addUser,editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;