
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../features/user/userSlice";
import { checkDuplicateSpaces, checkInitialSpace, MobileCharacter   } from "../utils/Helper";
import { mailCharacter } from "../utils/Helper";
import { nameCharacter } from "../utils/Helper";


function AddUser(){
   
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const [values, setValues]=useState({
        username:"",
        email:"",
        password:"",
        mobile_number:""
    });
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password:false,
        mobile: false
    });
   /* const handleAddUser=()=>
       
       ;*/
       
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") {

            console.log(value.charAt(0), "<<<<<<< FISRT chart")
            //checkinitialspace form helper
            if (checkInitialSpace(value)) {
                event.preventDefault();
            }//checkinitialspace form helper
             else if (checkDuplicateSpaces(value)) {
                event.preventDefault();
            } else {
                if (value.length >= 1 && value.length <= 3) {
                    setErrors({ ...errors, name: true })
                    setValues({ ...values, [name]: value })
                } else if ((value.length >= 50)) {
                    event.preventDefault();
                } else {

                    setErrors({ ...errors, name: false })
                    setValues({ ...values, [name]: value })
                }
            }


        } else if (name === "email") {


            if (value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
                setErrors({ ...errors, email: false })
                setValues({ ...values, [name]: value })
            } else if (value.length >= 20) {

            } else {
                setErrors({ ...errors, email: true })
                setValues({ ...values, [name]: value })
            }
           
        }  else if (name === "password") {
            setErrors({ ...errors, password: false })
            setValues({ ...values, [name]: value })
            console.log(value);
         }

        else if (name === "mobile") {
            console.log('mail trigger');
            if (value.charAt(0) <= 5) {
                setErrors({ ...errors, mobile: true })
                setValues({ ...values, [name]: value })
            } else {
                if (value.length >= 1 && value.length <= 9) {
                    setErrors({ ...errors, mobile: true })
                    setValues({ ...values, [name]: value })
                } else {
                    setErrors({ ...errors, mobile: false })
                    setValues({ ...values, [name]: value })
                }


            }

        }
    }
    
   
    
    return(
<div>
<form onSubmit={
                event => {
                    event.preventDefault();
                   
                    if (values.name && values.email && values.password&& values.mobile) {
                          const Data ={
                            username:values.name,
                            email:values.email,
                            password: values.password,
                            mobile_number:values.mobile};
                        
                        dispatch(addUser(Data));
                      navigate('/user-list');
                       } } }>


                <h1 className="form-head">ADD USER</h1>

                <div className="field-set">
                    <label>name</label><br></br>
                    <input type='text'
                         name='name'  required='required' 
                         onKeyDown={(e) => nameCharacter.includes(e.key) && e.preventDefault()} 
                         onChange={(e) => handleInputChange(e)}
                         value={values.name} />
                          {errors.name ? <label style={{ color: "red", fontSize: "10px" }}>Please enter your name</label> : ""}
                </div>


                <div className="field-set">
                    <label>mail id</label><br></br>
                    <input
                        type='text'
                        className="mail-field"
                        name='email'
                        onKeyDown={(e) => mailCharacter.includes(e.key) && e.preventDefault()}
                        onChange={(e) => handleInputChange(e)}
                        required='required' value={values.email}/>
                         {errors.email ? <label style={{ color: "red", fontSize: "10px" }}>enter mail id</label> : ""}
                </div>
                <div className="field-set">
                    <label>password</label><br></br>
                    <input
                        maxLength={10}
                        type='text'
                        name='password'
                        onChange={(e) => handleInputChange(e)}
                        required='required'
                        value={values.password}
                       
                    /></div>

                <div className="field-set">
                    <label>phone no</label><br></br>
                    <input
                        maxLength={10}
                        type='text'
                        name='mobile'
                        onKeyDown={(e) => MobileCharacter.includes(e.key) && e.preventDefault()}
                        onChange={(e) => handleInputChange(e)}
                        required='required'
                        value={values.mobile}
                       
                    /> {errors.mobile ? <label style={{ color: "red", fontSize: "10px" }}>enter phone number</label> : ""}
                </div>
                <input type="submit" value="Submit" />
                </form>     
</div>
    )
}
export default AddUser;