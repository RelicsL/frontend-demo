import { observable, action } from "mobx";

export class Stores{
  
  @observable linkSelected = 'learning';
  @observable loginSelected = '';
  @observable username;

  @action
  setLinkSelected(val){
    this.linkSelected = val;
  }

  @action
  setLoginSelected(val){
    this.loginSelected = val;
  }

  @action
  setUsername(val){
    this.username = val;
  }

}
export const stores = new Stores();