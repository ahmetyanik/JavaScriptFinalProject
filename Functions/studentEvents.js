import ortala from "./ortala.js";
import changePassword from "./changePassword.js";
import studentAllNotes from "./studentAllNotes.js";
import homePage from "./homePage.js";
import sendMessage from "./sendMessage.js";
import readMessage from "./readMessage.js";
import showPersonInfos from "./showPersonInfos.js";
import studentOptions from "./options/studentOptions.js";
import progress from "./progress.js";

import ps from "prompt-sync";
const prompt = ps();
import terminal from "terminal-kit";
const term = terminal.terminal;

function studentEvents() {

  studentOptions();

  let choice = parseInt(prompt("Select the action you want to do:"));

  console.clear();

  switch (choice) {
    case 1:
      changePassword();
      studentEvents();
      break;

    case 2:
      studentAllNotes();
      progress();
      studentEvents();
      break;

    case 3:
      showPersonInfos();
      studentEvents();
      break;

    case 4:
      sendMessage();
      break;

    case 5:
      readMessage();
      break;

    case 6:
      homePage();
      break;

    default:
      ortala("Hatali Giris");
      term.red.bold("Hatali giris yaptiniz!\n"); 
      studentEvents();
  }

  ortala("");
}

export default studentEvents;
