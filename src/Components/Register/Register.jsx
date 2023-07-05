import React from 'react'
import './Register.css'
import icon from '../../Assets/Developer Test/Rexav Logo.png'

import logo from '../../Assets/Developer Test/3D logo.png'
function Register() {
  return (
    <div>

<img className='icon' src={icon} alt="" />
        <img src={logo} alt="" />
            
        
        <div class="login-container">

         
         <h2>Sign up for a REXAV 
            Account</h2>
         <form action="">
            <label  htmlFor="">What's your name?</label>
            <input type="text" placeholder="Full name" required/>
            <label  htmlFor="">What's your email? </label>
            <input type="email" placeholder="Email" required/>
            <label  htmlFor="">What's your phone number</label>
            <input type="number" placeholder="Phone" required/>
            <label  htmlFor="">Create password</label>
            <input type="password" placeholder="Password" required/>
            <label  htmlFor="">Confirm password</label>
           <input type="password" placeholder="Password" required/>
           
           <button type="submit">Sign up</button></form>

           <hr />

           <p>Have an account? &nbsp;<a className='signup' href="">Login</a></p>
         
       </div>
    </div>
  )
}

export default Register