import ortala from "./ortala.js";
import addStudent from "./addStudents.js";
import addClass from "./addClass.js";
import showStudentLists from "./showStudentLists.js";
import studentAllNotes from "./studentAllNotes.js";
import changePassword from "./changePassword.js";
import schoolGeneralInformation from "./schoolGeneralInformation.js";
import homePage from "./homePage.js";
import sendMessage from "./sendMessage.js";
import readMessage from "./readMessage.js";
import showPersonInfos from "./showPersonInfos.js";

import ps from "prompt-sync";
import directorOptions from "./options/directorOptions.js";
import progress from "./progress.js";
const prompt = ps();
import terminal from "terminal-kit";
const term = terminal.terminal;

function directorEvents() {
  directorOptions();

  let choice = parseInt(prompt("Select the action you want to do:"));
  console.clear();

  switch (choice) {
    case 1:
      addStudent();
      progress();
      directorEvents();
      break;

    case 2:
      addClass();
      progress();
      directorEvents();

    case 3:
      showStudentLists();
      progress();
      directorEvents();
      break;

    case 4:
      studentAllNotes();
      progress();
      directorEvents();
      break;

    case 5:
      changePassword();
      progress();
      directorEvents();
      break;

    case 6:
      schoolGeneralInformation();
      progress();
      directorEvents();

    case 7:
      sendMessage();
      break;

    case 8:
      readMessage();
      break;

    case 9:
      showPersonInfos();
      directorEvents();
      break;

    case 10:
      homePage();
      break;

    default:
      ortala("Hatali Giris");
      term.red.bold("Hatali giris yaptiniz!\n");
      directorEvents();
  }

  ortala("");
}

export default directorEvents;
