import { correctEncryptedPersonObject } from "../States/states.js";

correctEncryptedPersonObject

function unreadMessageWarnings(){

    let sayi = 0;
    
    for(let i=0;i<correctEncryptedPersonObject.messages.length;i++){
        if(correctEncryptedPersonObject.messages[i].isRead===false){
          sayi++;
        }
    }
  
    if(sayi>0){
      console.log(`${sayi} adet okunmamis mesajiniz var`);
    }
}

export default unreadMessageWarnings;

