import { correctEncryptedPersonObject } from "../States/states.js";

import terminal from "terminal-kit";
const term = terminal.terminal;

correctEncryptedPersonObject

function unreadMessageWarnings(){

    
    let sayi = 0;
    
    for(let i=0;i<correctEncryptedPersonObject.messages.length;i++){
        if(correctEncryptedPersonObject.messages[i].isRead===false){
            sayi++;
        }
    }
    
    if(sayi>0){
      console.log();
      term.green.bold(`${sayi}`," adet okunmamis mesajiniz var\n")
    }
}

export default unreadMessageWarnings;

