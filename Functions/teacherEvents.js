import makeCenter from "./makeCenter.js";
import showPersonInfos from "./showPersonInfos.js";
import showClassList from "./showClassList.js";
import changePassword from "./changePassword.js";
import homePage from "./homePage.js";
import grading from "./grading.js";
import sendMessage from "./sendMessage.js";
import readMessage from "./readMessage.js";

import ps from "prompt-sync";
import teacherOptions from "./options/teacherOptions.js";
const prompt = ps();
import terminal from "terminal-kit";
const term = terminal.terminal;

function teacherEvents() {
  teacherOptions();

  let choice = parseInt(prompt("Select the action you want to do:"));
  console.clear();

  switch (choice) {
    case 1:
      showPersonInfos();
      teacherEvents();
      break;

    case 2:
      showClassList();
      teacherEvents();
      break;

    case 3:
      changePassword();
      teacherEvents();
      break;

    case 4:
      grading();
      break;

    case 5:
      sendMessage();
      break;

    case 6:
      readMessage();
      break;

    case 7:
      homePage();
      break;

    default:
      makeCenter("");
      term.red.bold("You entered wrong!\n");
      teacherEvents();
  }

  makeCenter("");
}

export default teacherEvents;
