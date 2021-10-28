import ortala from "./ortala.js";
import sendPersonEvents from "./sendPersonEvents.js";
import {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject,setWhoIs,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setNewClass} from "../States/states.js";



function readMessage() {
    ortala(`${correctEncryptedPersonObject.fullName} Your Messages`);
  
    let comingMessages = correctEncryptedPersonObject.messages;
  
    if (comingMessages.length === 0) {
      console.log("You have not any message to read!");
    } else {
      for (let i = 0; i < comingMessages.length; i++) {
        console.log(
          `${comingMessages[comingMessages.length - 1 - i].fullName} : ${
            comingMessages[comingMessages.length - 1 - i].message
          }`
        );
      }
    }
  
    ortala("");
  
    sendPersonEvents();
  }

  export default readMessage;