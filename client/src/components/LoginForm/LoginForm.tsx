import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import {observer} from "mobx-react-lite";

const LoginForm:FC = () =>{
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');    
    const {store} = useContext(Context);  

    return (
        <div>
            <input 
                onChange={e => setUsername(e.target.value)} 
                value = {username}
                type = "text"
                placeholder='Username'
            >
            
            </input>

            <input 
                onChange={e => setPassword(e.target.value)} 
                value = {password}
                type = "text"
                placeholder='Password'
            >
            </input>
            
            <button onClick = {() => store.login(username, password)}>Логин</button>

            <button onClick={() => store.registration(username, password)}>Регистрация</button>
        </div>
    )
}

export default observer(LoginForm);