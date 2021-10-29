import ortala from "./ortala.js";
import Message from "../Classes/Message.js";
import { allStaff } from "../DefaultPersons/defaultPersons.js";
import sendPersonEvents from "./sendPersonEvents.js";
import { correctEncryptedPersonObject } from "../States/states.js";

import ps from "prompt-sync";
import progress from "./progress.js";
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
  } else {
    console.log(`
Mesajiniz gönderildi...`);
  }

  ortala("");

  progress();

  sendPersonEvents();
}

export default sendMessage;
