import React, {useState} from 'react';
import './styles.css';
import {FaUser,FaLock} from 'react-icons/fa';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function Register(){





    return(
        <div className="content">
            <div className="text">Register Form</div>
            <form action="#">
                <div className="field">
                    <span className="FaRegUserCircle"></span>
                    <input type="text" required/>
                    <label>Name</label>
                </div>
                <div className="field">
                    <span className="FaUser"></span>
                    <input type="text" required/>
                    <label>Username</label>
                </div>
                <div className="field">
                    <span className="FaLock"></span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className="field">
                    <span className="FaEnvelope"></span>
                    <input type="email" id="skip_valid" required/>
                    <label>Email</label>
                </div>
                <div className="field">
                    <span className="FaWhatsapp"></span>
                    <input type="tel" id="skip_valid" required/>
                    <label>Whatsapp</label>
                </div>

                <div className="field_special">
                    <span className="FaWallet"></span>
                    <input list="stocks" id="lista" required/>
                    <label>Ações</label>
                    <datalist id="stocks">
                        <option value="teste1"></option>
                        <option value="teste2"></option>
                        <option value="teste3"></option>
                        <option value="teste4"></option>
                    </datalist>
                    <button id="adicionar">Adicionar</button>
                </div>

                <button>Create Account</button>
            </form>
        </div>
    )
}