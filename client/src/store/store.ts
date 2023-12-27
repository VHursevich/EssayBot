import { IUser } from "../models/IUser";
import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http";

export default class Store{
    user = {} as IUser;
    isAuth = false;
    isLoading = false;

    constructor(){
        makeAutoObservable(this);
    }

    setUser(user: IUser){
        this.user = user;
    }

    setAuthStatus(status: boolean){
        this.isAuth = status;
    }

    setCredit(creditsLeft: number){
        this.user.credit = creditsLeft;
    }

    setLoading(status: boolean){
        this.isLoading = status;
    }

    async login(username: string, password: string){
        try{        
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setUser(response.data.user);   
            this.setAuthStatus(true);
        } catch(e){
                if (axios.isAxiosError(e)) {
                console.log(e.response?.data?.message);         
            }
        }
    }
    
    async registration(username: string, password: string){
        try{
            const response = await AuthService.registration(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setUser(response.data.user); 
            this.setAuthStatus(true);
        } catch(e){
            if (axios.isAxiosError(e)) {
                console.log(e.response?.data?.message);         
            }
        }
    }
    
    async logout(){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setUser({}as IUser);   
            this.setAuthStatus(false);
        } catch(e){
            if (axios.isAxiosError(e)) {
                console.log(e.response?.data?.message);         
            }
        }
    }

    async checkAuth(){
        this.setLoading(true);
        try{
            
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});          
            console.log(response); //для DEBUG
            localStorage.setItem('token', response.data.accessToken);
            this.setUser(response.data.user);
            this.setAuthStatus(true);
        }
        catch(e){
            if (axios.isAxiosError(e)) {
                console.log(e.response?.data?.message);         
            }
        } finally{
            this.setLoading(false);
        }
    }
}