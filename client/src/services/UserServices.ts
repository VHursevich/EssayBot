import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { IUser } from "../models/IUser";
import { BotResponse } from "../models/response/BotResponse";

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>>{
    return $api.get<IUser[]>('/getUsers'); //Доделать, возвращаются сразу несколько
  }

  static useToken(username: string): Promise<AxiosResponse<BotResponse>>{
    return $api.patch<BotResponse>('/useToken', {username});
  }
}
