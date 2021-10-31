import { correctEncryptedPersonObject } from "../States/states.js";

import terminal from "terminal-kit";
const term = terminal.terminal;

correctEncryptedPersonObject

function unreadMessageWarnings(){

    
    let num = 0;
    
    for(let i=0;i<correctEncryptedPersonObject.messages.length;i++){
        if(correctEncryptedPersonObject.messages[i].isRead===false){
            num++;
        }
    }
    
    if(num>0){
      console.log();
      term.green.bold("You have "+ `${num}` +" unread messages!!!\n")
      console.log();
    }
}

export default unreadMessageWarnings;

