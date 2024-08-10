import Home from "./Home";
import {Route,Routes} from 'react-router-dom'
import Signup from "./Signup";
import Login from "./Login";
function AllRoutes(){
    return <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* 
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/> */}
    </Routes></>
}

export default AllRoutes;