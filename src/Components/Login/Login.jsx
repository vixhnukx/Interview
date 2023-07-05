import React from 'react'
import icon from '../../Assets/Developer Test/Rexav Logo.png'

import logo from '../../Assets/Developer Test/3D logo.png'
import './Login.css'
function Login() {
  return (
    <div>
        <img className='icon' src={icon} alt="" />
        <img src={logo} alt="" />
            
        
        <div class="login-container">

         
         <h2>Login in to REXAV 
            Dashboard</h2>
         <form action="">
            <label  htmlFor="">Email Address</label>
            <input type="email" placeholder="Email" required/>
            <label  htmlFor="">Password</label>
           <input type="password" placeholder="Password" required/>
           <input  type="checkbox" />
           <label className='checkbox' htmlFor="">Remind me</label>
           <button type="submit">Login</button></form>
           <a className='Forgot' href="">Forgot Password</a>

           <hr />

           <p>Don't have an account? &nbsp;<a className='signup' href="">Sign up for Rexav</a></p>
         
       </div>
       </div>
    
  )
}

export default Login