import { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

 const LoginPopup = ({setShowLogin})=>{
    const [currentState, setCurrentState]= useState("Signup")
return(
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <span class="material-symbols-outlined"  onClick={()=>{setShowLogin(false)}}>close</span> 
            </div>
            <div className="login-popup-input">
                {currentState === "Login" ?<></>:<input type="text" name="fname" id="fname" placeholder='Your Name' required  />}
                <input type="email" name="email" id="email" placeholder='email' required />
                <input type="password" name="password" id="password" placeholder='password' required />
            </div>
            <button>{currentState === "Signup" ? "Create Account": "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>I agree to the terms and condition</p>
            </div>
           {currentState === "Login"?
            <p>Create a new account ? <span onClick={()=>setCurrentState("Signup")} >Click here</span></p>
            :<p>Already have account ? <span onClick={()=>setCurrentState("Login")} >Click here</span></p>
            }
        </form>
    </div>
)
}

export default LoginPopup