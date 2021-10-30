import ortala from "./ortala.js";
import sendPersonEvents from "./sendPersonEvents.js";
import { correctEncryptedPersonObject,correctEncryptedPersonNewMessageNumber } from "../States/states.js";
import progress from "./progress.js";
import terminal from "terminal-kit";
const term = terminal.terminal;

function readMessage() {
  ortala(`${correctEncryptedPersonObject.fullName} Your Messages`);
  console.log();
  let comingMessages = correctEncryptedPersonObject.messages;

  if (comingMessages.length === 0) {

    term.red.bold("You do not have any message!\n")
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
  ortala("");

  progress();

  sendPersonEvents();
}

export default readMessage;
