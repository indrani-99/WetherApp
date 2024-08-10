import { useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function Signup() {

    const navigate=useNavigate();
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const confirmPassword=useRef();
    const [passwordMatch, setPasswordMatch]=useState(false);
    const [nameErr, setNameErr]=useState(false);
    const [emailerr, setEmailErr]=useState(false);
    const [passwordErr, setPasswordErr]=useState(false);

    const inputValidation=()=>{
        if(!name.current)
            setNameErr(true);
        else
            setNameErr(false);
        if(!email.current)
            setEmailErr(true);
        else
            setEmailErr(false);
        if(!password.current)
            setPasswordErr(true);
        else
            setPasswordErr(false);
        if(confirmPassword.current && confirmPassword.current.value==password.current.value)
            setPasswordMatch(true);
        else
            setPasswordMatch(false);
        
        if(!passwordMatch && !nameErr && !passwordErr && !emailerr)
            return true;
        else
            return false;
    }
    const handleRegister=async ()=>{

        if(!inputValidation())
        {
            alert("Please enter valid credential");
            return;
        }
        const newUser = {
            username: name.current.value,
            email: email.current.value,
            password: password.current.value
        };
        try{
            let res=await axios.get('http://localhost:3000/users');
            let isUserExists=res.data.some((element)=>element.email==newUser.email);
        
        if(isUserExists){
            alert("User already exists with this email! Please login");
            return;
        }
        let response=await axios.post('http://localhost:3000/users',newUser);
        console.log(response);
        if(response.status==201)
        {
            alert("Registration successful");
            navigate('/login');
        }
        else
            console.log("server error");
        }
        catch(err)
        {
            console.log(err);
        }
           
    }
  return (
    <>
      <div>
        <input type="text" placeholder="Enter your username" ref={name} required/>
        <input type="email" placeholder="Enter your email" ref={email} required/>
        <input type="password" placeholder="Enter password" ref={password} required/>
        <input type="password" placeholder="Confirm password" ref={confirmPassword} required/>
        <button onClick={handleRegister}>Register</button>
      </div>
    </>
  );
}
export default Signup;