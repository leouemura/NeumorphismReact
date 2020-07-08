import React, {useState} from 'react';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function Login(){
    


    return(
        <div className="content">
            <div className="text">Login Form</div>
            <form action="#">
                <div className="field">
                    <span className="fas fa-user"></span>
                    <input type="text" required/>
                    <label htmlFor="username">Username</label>
                </div>
                <div className="field">
                    <span className="fas fa-lock"></span>
                    <input type="password" required/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="forgot-pass"> <a href="#">Forgot Password?</a> </div>
                <button>Sign In</button>
                <div className="signup">Not a member? 
                    <a href="#">SignUp now</a>
                </div>
            </form>
        </div>
    )
}

















