import { createSlice,  createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
/*const initialState = [
{id:1,name:"jack",mail:"jack@gmail.com",mobile:9090908855},
{id:2,name:"black",mail:"black@gmail.com",mobile:9090908866},
{id:3,name:"vasu",mail:"vasu@gmail.com",mobile:9090908877}]*/
export const getUsers=createAsyncThunk("user/getUsers",async ()=>{
  return axios.get('https://crud-api-52np.onrender.com/jd/test/user-list')
  .then(res =>{
    console.log(res);
      return res.data;

  })
})

export const addUser = createAsyncThunk("user/addUser",async (Data) => {
  return axios.post("https://crud-api-52np.onrender.com/jd/test/add-user",Data)
  .then(res=>{
    return (res.data,
      getUsers());
  })
  
 
}
);

export const deleteUser = createAsyncThunk("user/deleteUser",async (id) => {


return axios.delete(`https://crud-api-52np.onrender.com/jd/test/user-list/${id}`)
.then(res=>{
  console.log(res.data);
  return (res.data,
    getUsers());
})
}
);




export const  editUser = createAsyncThunk("user/ editUser",async ({id, Data},{rejectWithValue}) => {
console.log(Data,">>>>>>>>>>>>>>res");
  return axios.patch(` https://crud-api-52np.onrender.com/jd/test/user-list/${id}`, Data).then(res=>{
   
    return (res.data,
    getUsers());
  }) . catch (err=> {
        return (rejectWithValue(err.response.data),
        console.log(err.response.data))
      })
  
}

);




const userSlice = createSlice({
  name: 'users',
  initialState:{
    users :[],
    loading:false,
  },
  /*reducers:{
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
  },*/
  extraReducers:{
    [getUsers.pending]:(state,action)=>{
        state.loading=true;
    },
    [getUsers.fulfilled]:(state,action)=>{
        state.loading=false;
        state.users=action.payload;
       
    },
    [getUsers.rejected]:(state,action)=>{
        state.loading=true;
    },
    [  addUser.pending]: (state, action) => {
      state.loading = true;
    },
    [  addUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = [action.payload];
    },
    [  addUser.rejected]: (state, action) => {
      state.loading = false;
      
    },
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const {arg: { id }} = action.meta;
      console.log(action.meta,"<<<<<<<<<<<<meta");
      if (id) {
       
        state.users = state.users.filter((item) => item._id !== id);
        
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [editUser.pending]: (state, action) => {
      state.loading = true;
     
    },
    [editUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { arg: { id }} = action.meta;
     
      if (id) {
        state.users = state.users.map((item) =>item._id === id ? action.payload : item
        );
      }
    },
    [editUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    
    }
   
    
  }
})



export default userSlice.reducer;
