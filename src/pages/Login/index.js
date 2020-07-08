import React, {useState} from 'react';
import './styles.css';
import {FaUser,FaLock} from 'react-icons/fa';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const res = await api.post('session', {username, password});

            //console.log(res.data)
            if(res.data.token===undefined){
                alert(res.data.error)
            }
            else{
                localStorage.setItem('token',res.data.token);
            
                history.push('/profile');
            }
            
        } catch(err){
            alert('Falha no login, tente novamente.')
        }
    }


    return(
        <div className="content">
            <div className="text">Login Form</div>
            <form onSubmit={handleLogin}>
                <div className="field">
                    
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} required/>
                    <label htmlFor="username"> 
                        <FaUser size={12} position="absolute" width='50px' line-height='50px' color="#595959"/>
                        Username
                    </label>
                </div>
                <div className="field">
                    <span className="fas fa-lock"></span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    <label htmlFor="password">
                        <FaLock size={12} position="absolute" width='50px' line-height='50px' color="#595959"/>
                        Password
                    </label>
                </div>
                <div className="forgot-pass"> <Link to='/help'>Forgot Password?</Link> </div>
                <button type="submit">Sign In</button>
                <div className="signup">Not a member? 
                    <Link to='register'>SignUp now</Link>
                </div>
            </form>
        </div>
    )
}

















