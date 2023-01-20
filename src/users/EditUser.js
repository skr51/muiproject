
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../features/user/userSlice";
import { checkDuplicateSpaces, checkInitialSpace, MobileCharacter   } from "../utils/Helper";
import { mailCharacter } from "../utils/Helper";
import { nameCharacter } from "../utils/Helper";

const EditUser=()=>{

   // const [existingUser, setExistingUser] = useState([])

    const params = useParams();
    const dispatch = useDispatch();
    const users=useSelector(store=>store.users);
    const navigate=useNavigate();
    const existingUser=users.filter(user=>user.id === parseInt(params.id));
  
const {name,mail,mobile}=existingUser[0];
    
    
    
   
    //const {name,mail,mobile}=existingUser;
    const [values, setValues]=useState({
        name:name,
        mail:mail,
        mobile:mobile
    });

    const initialFormState = { id: null, name: "", mail: "", mobile: "" };
    const [errors, setErrors] =useState({
        name: false,
        mail: false,
        mobile: false
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(value.length)
       

        if (name === "name") {
            if (checkInitialSpace(value)) {
                event.preventDefault();
            }//checkinitialspace form helper
             else if (checkDuplicateSpaces(value)) {
                event.preventDefault();
            } else{ if (value.length >= 1 && value.length <= 3) {
            
                setErrors({ ...errors, name: true })
                setValues({ ...values, [name]: value })
            } else if (value.length >= 10 ){
                event.preventDefault();
            } else {

                setErrors({ ...errors, name: false })
                setValues({ ...values, [name]: value })
            }}
            console.log(event.keycode);
        } else if (name === "mail") {
            if (value.length >= 1 && value.length <= 10) {
                setErrors({ ...errors, mail: true })
                setValues({ ...values, [name]: value })
            } else if (value.length >= 20) {

            } else {

                setErrors({ ...errors, mail: false })
                setValues({ ...values, [name]: value })
            }
        } else if (name === "mobile") {
            if (value.length >= 1 && value.length <= 9) {
                setErrors({ ...errors, mobile: true })
                setValues({ ...values, [name]: value })
            } else if (value.length >= 11) {

            } else {

                setErrors({ ...errors, mobile: false })
                setValues({ ...values, [name]: value })
            }
        }
    }
{/*
    useEffect(() => {
        if(users.length > 0){
           setExistingUser(users.filter((value) => value.id === parseInt(params.id) ))
           setValues(users.filter((value) => value.id === parseInt(params.id) ))
           
        }
       }, [users])
       useEffect(() => {
        if(existingUser.length> 0){
    
        console.log(existingUser,"<<<<<< existingUser")
        setValues({
            name:existingUser[0].name,
            mail:existingUser[0].mail,
            mobile:existingUser[0].mobile
        })


        }
       }, [existingUser])*/}
    return(
        <div>
         <form onSubmit={
            event => {
                event.preventDefault();
                if (!values.name || !values.mail || !values.mobile) return;
                setValues({name:"",mail:"",mobile:""});
                console.log(values.name);
                
      dispatch(editUser({
        id: parseInt( params.id),
        name: values.name,
        mail:values.mail,
        mobile: values.mobile
      }))
      
                navigate('/user-list');
               
               
            }}>
                        <h1>EDIT USER</h1>
        
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
                                name='mail'
                                onKeyDown={(e) => mailCharacter.includes(e.key) && e.preventDefault()}
                                onChange={(e) => handleInputChange(e)}
                                required='required' value={values.mail}/>
                                 {errors.mail ? <label style={{ color: "red", fontSize: "10px" }}>enter mail id</label> : ""}
                        </div>
        
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
                            />
                             {errors.mobile ? <label style={{ color: "red", fontSize: "10px" }}>enter phone number</label> : ""}
                        </div>
                        <input type="submit" value="UPDATE USER" />
                      <button className="btn-cancel" onClick={() => {
                    setValues(initialFormState);
                }} >CANCEL</button> 
                       
                       </form>
                   
        </div>
            )
}
export default EditUser;