import { observable, action } from "mobx";

export class Stores{
  
  @observable linkSelected = 'learning';

  @action
  setLinkSelected(val){
    this.linkSelected = val;
  }

}
export const stores = new Stores();