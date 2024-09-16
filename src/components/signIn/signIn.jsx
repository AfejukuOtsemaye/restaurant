import React, { useState } from 'react';
import './signIn.css';
import { Assets } from '../../assets/assets';

export const SignIn = ({setLogins}) => {

    const [currentState, setCurrentState] = useState("Login")
  return (
    <div className='signIn'>
      <form action="" className="sigIn-container">
        <div className="signIn-title">
          <h2>
            {currentState}
          </h2>
          <img className='close-Icon' onClick={()=>setLogins(false)} src={Assets.closeIcon} alt="close-form" />
        </div>
        <div className="signIn-input">
            {currentState==="Login" ? <></> : <input type="text"  placeholder='Your name' required/>}
        
            <input type="email"  placeholder='Your email' required/>
            <input type="password"  placeholder='password' required/>
        </div>
        <button>{currentState==="Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-conditions">
          <input type="checkbox" required/>
          <p>
            By continuing, i agree to the terms of use & privacy policy.
          </p>
        </div>
        {currentState==="Login" 
        ?
        <p>
          Create A New Account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span>
        </p>
        :
        <p>
          Already Have An Account? <span onClick={()=>setCurrentState("Login")}> Login Here</span>
        </p>
        }
       
        
      </form>
    </div>
  )
}


