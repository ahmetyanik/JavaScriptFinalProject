import ortala from "./ortala.js";
import sendPersonEvents from "./sendPersonEvents.js";
import {
  correctEncryptedPersonObject,
  setNewMessage,
} from "../States/states.js";
import progress from "./progress.js";

function readMessage() {
  ortala(`${correctEncryptedPersonObject.fullName} Your Messages`);

  let comingMessages = correctEncryptedPersonObject.messages;
  console.log(comingMessages);

  if (comingMessages.length === 0) {
    console.log(`
You have not any message to read!
`);
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

  ortala("");

  progress();

  sendPersonEvents();
}

export default readMessage;
