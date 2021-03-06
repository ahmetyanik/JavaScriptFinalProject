import makeCenter from "./makeCenter.js";
import sendPersonEvents from "./sendPersonEvents.js";
import { correctEncryptedPersonObject } from "../States/states.js";
import progress from "./progress.js";
import terminal from "terminal-kit";
const term = terminal.terminal;

function readMessage() {
  makeCenter(`${correctEncryptedPersonObject.fullName} Your Messages`);
  console.log();
  let comingMessages = correctEncryptedPersonObject.messages;

  if (comingMessages.length === 0) {
    term.red.bold("You do not have any message!\n");
  } else {
    for (let i = 0; i < comingMessages.length; i++) {
      console.log(
        `
${comingMessages[comingMessages.length - 1 - i].fullName} : ${
          comingMessages[comingMessages.length - 1 - i].message
        }`
      );

      comingMessages[i].isRead = true;
    }
  }

  console.log();
  makeCenter("");

  progress();

  sendPersonEvents();
}

export default readMessage;
