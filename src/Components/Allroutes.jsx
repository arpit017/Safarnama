import { Routes, Route, Navigate } from 'react-router-dom';
// import AddressPage from './AddressPage';
// import LoadingPage from './LoadingPage';
// import PaymentPage from './PaymentPage';
// import SignUp from './SignUp';
// import Login from './Login';
import Myhome from "./Myhome"
import { SignUp } from './SignUp';
import { Login } from './Login';
import { Blogs } from './Blogs';
import { Admin } from './Admin';
import MakeBlog from './MakeBlog';
import EditBlog from './EditBlog';
import {  useSelector } from 'react-redux';
import { Details } from './Details';
import { useToast } from '@chakra-ui/react';



function Allroutes() {
    const toast = useToast()
    const auth=useSelector((data)=>{
return data.login
    })

    return ( 
    <Routes>

        <Route path="/" element={<Myhome/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/admin" element={auth?<Admin/>:<Navigate to="/login"  /> }/>
        <Route path="/createblog" element={<MakeBlog/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="*" element={<Myhome/>}/>
       
        <Route path="/editblog/:id" element={<EditBlog/>}/>

    
  </Routes>
        
    );
}

export default Allroutes;