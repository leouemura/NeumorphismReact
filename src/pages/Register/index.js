import React, {useState,useEffect} from 'react';
import './styles.css';
import {FaUserCircle,FaUser,FaLock,FaEnvelope,FaWallet,FaTimes} from 'react-icons/fa';
import {IoLogoWhatsapp} from 'react-icons/io'
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

export default function Register(){
    const [stocks,setStocks] = useState([]);
    const [selectedStock,setSelectedStock] = useState('')
    const [userStocks,setUserStocks] = useState([]);

    useEffect(()=>{
        api.get('fstocks').then(ret => {
            setStocks(ret.data);
        })
    },[])

    useEffect(()=>{
        console.log(userStocks)
    },[userStocks])
    

    async function handleSelectedStock(event){
        const chosenStock = event.target.value;
        setSelectedStock(chosenStock);
    }

    async function addStock(event){
        let count=0;
        stocks.map(verify=>{
            if(selectedStock.toUpperCase()===verify.stock){
                const newStock = selectedStock.toUpperCase();
                count=count+1;
                userStocks.map(duplicate=>{
                    if(newStock===duplicate){
                        count=count+1;
                    }
                })
                if(count===1){
                    setUserStocks([...userStocks,newStock])
                }
            }
        })
        if(count===0){
            alert("Ação não encontrada... Digite novamente");
        }
        if(count===2){
            alert("Ação ja adicionada anteriormente.")
        }
        
    }

    async function removeStock(userSelected){
        //console.log("TESTE: ",userSelected)
        const filteredStock = userStocks.filter(item => item!==userSelected)
        setUserStocks(filteredStock);
    }


    return(
        <div className="content">
            <div className="text">Register Form</div>
            <form action="#">
                <div className="field">
                    <input type="text" required/>
                    <label>
                        <FaUserCircle id="icon" size={12}/>
                        Name
                    </label>
                </div>
                <div className="field">
                    <input type="text" required/>
                    <label>
                        <FaUser id="icon" size={12}/>
                        Username
                    </label>
                </div>
                <div className="field">
                    <input type="password" required/>
                    <label>
                        <FaLock id="icon" size={12}/>
                        Password
                    </label>
                </div>
                <div className="field">
                    <input type="email" id="skip_valid" required/>
                    <label>
                        <FaEnvelope id="icon" size={12}/>
                        Email
                    </label>
                </div>
                <div className="field">
                    <input type="tel" id="skip_valid" required/>
                    <label>
                        <IoLogoWhatsapp id="icon" size={12}/>
                        Whatsapp
                    </label>
                </div>

                <div className="field_special">
                    <input list="stocks" id="lista" value={selectedStock} onChange={handleSelectedStock} required/>
                    <label>
                        <FaWallet id="icon" size={12}/>
                        Ações
                    </label>
                    <datalist id="stocks">
                        {stocks.map(list_stock =>(
                            <option key={list_stock.id} value={list_stock.stock}></option>
                        ))}
                    </datalist>
                    <button onClick={addStock} type="button" id="adicionar">Adicionar</button>
                </div>

                <div className="fieldStock">
                        {userStocks.map(userSelected =>{

                            return(
                                <span className="li_span" key={userSelected}>
                                    <label id="label_X">{userSelected}</label>
                                    <button onClick={()=>removeStock(userSelected)} type="button" id="button_X" ><FaTimes id="icon_X" size={15} color="red"/></button>
                                </span>
                            )
                        })}
                </div>

                <button>Create Account</button>
            </form>
        </div>
    )
}