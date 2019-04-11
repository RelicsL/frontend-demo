import axios from "axios";

const commonUrl = 'http://localhost:8066';
export class Api{

  getListData(path){
    return axios.get(`${commonUrl}/${path}`).then(d => d.data);
  }

}

export const api = new Api();