import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Signup() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/',{name,email,password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='container'>
    <div className='signup'>
    <h2>Create Account</h2>
    <form onSubmit={handleSubmit}>
    <div className='details'>
        <div className='signup_details'>
            <label>Name</label>
            <input type='text' placeholder='Enter Name' onChange={(e)=> setName(e.target.value)}/>
        </div>
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
        <button type="submit">Sign Up</button>
        <p className='login_para'>Already have an account? <Link to="/login">Login</Link></p>
    </div>
    </form>
    </div>
    </div>
  )
}

export default Signup
