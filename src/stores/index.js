import { observable, action } from "mobx";

export class Stores{
  
  @observable linkSelected = 'learning';
  @observable loginSelected = '';

  @action
  setLinkSelected(val){
    this.linkSelected = val;
  }

  @action
  setLoginSelected(val){
    this.loginSelected = val;
  }

}
export const stores = new Stores();