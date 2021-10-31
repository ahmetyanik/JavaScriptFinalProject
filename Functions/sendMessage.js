import makeCenter from "./makeCenter.js";
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
  makeCenter("MESSENGER");
  console.log();
  let forwardedPersonFound = false;

  let toWho = prompt("Who do you want to send your message to? ");
  console.log();

  let sendedPersonMail = correctEncryptedPersonObject.mailAddress;
  let sendedPersonFullName = correctEncryptedPersonObject.fullName;

  let message = prompt("Please enter your message: ");
  let unreadMessageNumber = 0;

  const newMessage = new Message(
    message,
    sendedPersonFullName,
    sendedPersonMail,
    toWho,
    false,
    unreadMessageNumber
  );

  for (let i = 0; i < allStaff.length; i++) {
    if (allStaff[i].mailAddress === toWho) {
      allStaff[i].messages.push(newMessage);
      forwardedPersonFound = true;
      newMessage.unreadMessageNumber++;
      break;
    }
  }

  if (forwardedPersonFound === false) {
    makeCenter("");
    console.log();
    term.red("You entered the wrong e-mail address!!!\n");
    console.log();
    makeCenter("");
  } else {
    console.log();
    term.green.bold("Your message has been successfully sent.\n");
  }

  console.log();
  makeCenter("");

  progress();

  sendPersonEvents();
}

export default sendMessage;
