import ortala from "./ortala.js";
import Message from "../Classes/Message.js";
import {
  director,
  teachers,
  students,
  allStaff,
  classes,
} from "../DefaultPersons/defaultPersons.js";
import sendPersonEvents from "./sendPersonEvents.js";
import {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject,setWhoIs,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setNewClass} from "../States/states.js";

import ps from "prompt-sync";
const prompt = ps();

function sendMessage() {
  ortala("");
  let iletilmekIstenenKisiBulundu = false;

  let kime = prompt("Mesajinizi kime göndermek istiyorsunuz?");

  let gönderenMail = correctEncryptedPersonObject.mailAddress;
  let gönderenFullName = correctEncryptedPersonObject.fullName;

  let message = prompt("Lütfen mesajinizi giriniz:");

  const newMessage = new Message(
    message,
    gönderenFullName,
    gönderenMail,
    kime,
    false
  );

  for (let i = 0; i < allStaff.length; i++) {
    if (allStaff[i].mailAddress === kime) {
      allStaff[i].messages.push(newMessage);
      iletilmekIstenenKisiBulundu = true;
      break;
    }
  }

  if (iletilmekIstenenKisiBulundu === false) {
    console.log("Hatali mail adresi girdiniz!!!");
  }

  ortala("");

  sendPersonEvents();
}

export default sendMessage;
