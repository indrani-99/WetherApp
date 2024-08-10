import { useNavigate } from "react-router-dom";

function Home(){

    const navigate=useNavigate();
    const handleSignup=()=>{
        navigate('/signup');
    }
    const handleLogin=()=>{
        navigate('/login');
    }
    return <><h1>Welcome to Whether App</h1>
    <button onClick={handleSignup}>Sign up</button>
    <button onClick={handleLogin}>Login</button></>
}

export default Home;