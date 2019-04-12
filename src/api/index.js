import axios from "axios";

const commonUrl = 'http://localhost:2333';

export class Api{

  getListData(path){
    return axios.get(`${commonUrl}/${path}`).then(d => d.data);
  }

  searchUser(name){
    return axios.get(`${commonUrl}/search`,{ params :{ name }}).then(d => d.data);
  }

  register(params){
    return axios.post(`${commonUrl}/register`,{ params }).then(d => d.data);
  }
  
  login(name,password){
    return axios.get(`${commonUrl}/login`,{ params:{ name,password } }).then(d => d.data);
  }
}

export const api = new Api();