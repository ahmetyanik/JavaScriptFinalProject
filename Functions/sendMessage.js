import ortala from "./ortala.js";
import Message from "../Classes/Message.js";
import { allStaff } from "../DefaultPersons/defaultPersons.js";
import sendPersonEvents from "./sendPersonEvents.js";
import { correctEncryptedPersonObject } from "../States/states.js";

import ps from "prompt-sync";
import progress from "./progress.js";
const prompt = ps();

import terminal from "terminal-kit";
const term = terminal.terminal;

function sendMessage() {
  ortala("MESSENGER");
  console.log();
  let iletilmekIstenenKisiBulundu = false;

  let kime = prompt("Mesajinizi kime göndermek istiyorsunuz? ");
  console.log();

  let gönderenMail = correctEncryptedPersonObject.mailAddress;
  let gönderenFullName = correctEncryptedPersonObject.fullName;

  let message = prompt("Lütfen mesajinizi giriniz: ");
  let unreadMessageNumber = 0;

  const newMessage = new Message(
    message,
    gönderenFullName,
    gönderenMail,
    kime,
    false,
    unreadMessageNumber
  );

  for (let i = 0; i < allStaff.length; i++) {
    if (allStaff[i].mailAddress === kime) {
      allStaff[i].messages.push(newMessage);
      iletilmekIstenenKisiBulundu = true;
      newMessage.unreadMessageNumber++;
      break;
    }
  }
  
  if (iletilmekIstenenKisiBulundu === false) {
      ortala("");
      console.log();
     term.red("Hatali mail adresi girdiniz!!!\n")
     console.log();
     ortala("");
  } else {
    console.log();
    term.green.bold("Your message has been successfully sent.\n")
  }

  console.log();
  ortala("");

  progress();

  sendPersonEvents();
}

export default sendMessage;
