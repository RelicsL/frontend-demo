
export class Cookie {

  setCookie(name,value,timer){
      var date =new Date;
      date.setDate(date.getDate()+timer);
      document.cookie = name+"="+value+";expires="+date;
  }

  getCookie(name){
      let arr = document.cookie.split("; ");
      for(let i=0;i<arr.length;i++){
          let arr2 = arr[i].split("=");
          if(arr2[0] == name){
              return arr2[1];
          }
      }
      return "";
  }
  
  removeCookie(name){
    this.setCookie(name,1,-1);
  }

}
export const cookie = new Cookie();