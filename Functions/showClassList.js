import ortala from "./ortala.js";
import teacherEvents from "./teacherEvents.js";
import {
  inqueriedClassName,
  correctEncryptedPersonObject,
  setInqueriedClassName,
} from "../States/states.js";
import { students } from "../DefaultPersons/defaultPersons.js";

import ps from "prompt-sync";
import progress from "./progress.js";
import terminal from "terminal-kit";
const term = terminal.terminal;
const prompt = ps();

function showClassList() {
  ortala("");
  term.yellow.bold("Classes you can choose: ");
  console.log(`${correctEncryptedPersonObject.relatedClasses}`);
  setInqueriedClassName(prompt(`Please write a class name:`));

  console.clear();

  let permission = false;

  for (let i = 0; i < correctEncryptedPersonObject.relatedClasses.length; i++) {
    if (inqueriedClassName === correctEncryptedPersonObject.relatedClasses[i]) {
      permission = true;
    }
  }

  if (permission === true) {
    ortala(`${inqueriedClassName.toUpperCase()} CLASS LIST`);

    for (let i = 0; i < students.length; i++) {
      if (students[i].className === inqueriedClassName) {
        students[i].showInfos();
      }
    }
    ortala("");

    progress();
  } else {
    ortala("");
    console.log();
    term.red.bold(
      `Wrong choice!!! Please select your assigned classes!\n`
    );
    term.yellow.bold("Press 1 to return to the teacher page, and press 2 to display the class list again...\n");
    console.log();
    ortala("");
    let choice = parseInt(prompt(""));
    console.clear();
    
    switch (choice) {
      case 1:
        teacherEvents();
        break;

      case 2:
        showClassList();
        break;

      default:
        ortala("");
        term.red.bold(`You are being redirected to the teacher page...`);
        ortala("");
        teacherEvents();
        break;
    }
  }
}

export default showClassList;
