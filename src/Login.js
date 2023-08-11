import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {console.log(result)
          if(result.data === "Success"){
            navigate('/home')
          }
        
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='container'>
    <div className='signup'>
    <h2>Login to your account</h2>
    <form onSubmit={handleSubmit}>
    <div className='details'>
       
        <div className='signup_details'>
            <label>Email</label>
            <input type='email' placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className='signup_details'>
            <label>Password</label>
            <input type='password' placeholder='Enter Password' onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className='check signup_details'>
        <input type='checkbox' className='check_inp'/>
        <p className='check_para'>Remember Me</p>
        </div>
        <button>Login</button>
        <p className='login_para'>New to MyApp? <Link to="/">Sign Up</Link></p>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Login
