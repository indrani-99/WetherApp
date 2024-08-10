import { useRef } from "react";

function Login() {

    const email=useRef;
    const handleLogin=async ()=>{
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
        console.log("hello");
    }

    return (
      <>
        <div>
          <input type="text" placeholder="Enter your email"/>
          <input type="password" placeholder="Enter password"/>
          <button onClick={handleLogin}>Login</button>
        </div>
      </>
    );
  }
  export default Login;