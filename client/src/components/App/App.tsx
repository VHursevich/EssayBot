import React, { FC, useContext, useEffect, useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { Context } from "../../index";
import {observer} from "mobx-react-lite"; 
import Chat from "../Chat/Chat";
import UserService from "../../services/UserServices";
import { IUser } from "../../models/IUser";
  
const App: FC = () => {
  const {store} = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (!store.isLoading && localStorage.getItem('token')) {
        store.checkAuth();
        if(store.user.username !== undefined){
          store.setAuthStatus(true);
        }
    }     
  }, []);

  async function getUsers(){
    try{
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    }catch(e){
      console.log(e);
    }
  }
  
  async function useBotToken(){
    try{
      const response = await UserService.useToken(store.user.username);
      store.setCredit(response.data.credit);
    }catch(e){
        console.log(e);
    }
  }
  //Форма загрузки 
  if(store.isLoading){
    return (
      <div>Загрузка...</div>
    )
  }

  //Форма регистрации/логирования
  if(!store.isAuth){
    
    return(
      <div>
          <h1>Пользователь не авторизован</h1>
          <LoginForm/>  
      </div>
    )
  }

  //Основная форма после входа
  
  

  return( 
    <div>   
      <h1>
       {
          store.user.date == new Date('2001, 0, 0O5, 0, 0, 0, 0') ?
              `Токен не был использован`: `Токен был использован ${store.user.date}`       
       }
      
      </h1>


      <h1>{`Токен был использован ${store.user.date}`}</h1>

      <h1>{`Осталось кредитов: ${store.user.credit}`}</h1>
      
      <h1 >{`Пользователь ${store.user.username} авторизован`}</h1>
      
      <div>
        <button onClick={useBotToken}>Использовать бота</button>
      </div>

      <div>
        <button onClick={getUsers}>Получить пользоватей</button>
      </div>
      
      {users.map(user => {return(<div key = {user.username}>{user.username}</div>) })}


      <button onClick={() => store.logout()}>Выйти</button>
      <Chat/>
    </div>
  ); 
};

export default observer(App);