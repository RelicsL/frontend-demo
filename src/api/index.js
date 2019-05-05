import axios from "axios";
import { stores } from '../stores';

const commonUrl = 'http://localhost:2333';

export class Api{

  getListData(path){
    return axios.get(`${commonUrl}/${path}`,{}).then(d => d.data);
  }

  searchUser(name){
    return axios.get(`${commonUrl}/search`,{ params :{ name }}).then(d => d.data);
  }

  register(params){
    return axios.get(`${commonUrl}/register`,{ params }).then(d => d.data);
  }
  
  login(name,password){
    return axios.get(`${commonUrl}/login`,{ params:{ name,password } }).then(d => d.data);
  }

  getScenery(){
    return axios.get(`${commonUrl}/scenery`,{}).then(d => d.data);
  }

  getDetail(pid,did){
    return axios.get(`${commonUrl}/${pid}/detail`,{ params : { did }}).then(d => d.data);
  }

  getForum() {
    return axios.get(`${commonUrl}/forum`, {}).then(d => d.data);
  }

  addForum(params) {
    return axios.get(`${commonUrl}/forum/add`, { params: { ...params, author: stores.username } }).then(d => d.data);
  }

  addComment(comment, did) {
    return axios.get(`${commonUrl}/forum/comment/update`, { params: { did, comment, author: stores.username } }).then(d => d.data);
  }
  
  deleteComment(index, did) {
    return axios.get(`${commonUrl}/forum/comment/update`, { params: { did, index, author: stores.username } }).then(d => d.data);
  }

}

export const api = new Api();