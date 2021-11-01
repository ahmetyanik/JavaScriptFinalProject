import makeCenter from "./makeCenter.js";
import {
  whoIs,
  passwordCheck,
  correctEncryptedPersonPosition,
  setPassword,
  setCorrectEncryptedPerson,
  setCorrectEncryptedPersonPosition,
  setCorrectEncryptedPersonObject,
  setCorrectEncryptedPersonBranch,
} from "../States/states.js";
import {
  director,
  teachers,
  students,
} from "../DefaultPersons/defaultPersons.js";
import selectedPersonPage from "./selectedPersonPage.js";

import ps from "prompt-sync";
const prompt = ps();

import terminal from "terminal-kit";
import homePage from "./homePage.js";
const term = terminal.terminal;

function page() {
  makeCenter(`${whoIs.toUpperCase()} IDENTITY CONTROL PAGE`);
  console.log();

  setPassword(false);

  let personName = prompt("Your Name and Surname:");
  let personPassword = parseInt(prompt("Your password:"));

  console.clear();

  let arr;

  if (whoIs === "director") {
    arr = director;
  } else if (whoIs === "teacher") {
    arr = teachers;
  } else if (whoIs === "student") {
    arr = students;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].fullName === personName && arr[i].password === personPassword) {
      setCorrectEncryptedPerson(arr[i].fullName);
      setCorrectEncryptedPersonPosition(arr[i].position);
      setCorrectEncryptedPersonObject(arr[i]);
      setPassword(true);

      if (correctEncryptedPersonPosition === "Teacher") {
        setCorrectEncryptedPersonBranch(arr[i].branch);
      }

      selectedPersonPage();
      break;
    }
  }
  if (passwordCheck === false) {
    console.log("Incorrect Password!!!");
    let choice = parseInt(
      prompt("Press 1 to go to the homepage or press 2 to try again:")
    );

    console.clear();

    if (choice === 1) {
      homePage();
    } else if (choice === 2) {
      page(whoIs);
    } else {
      makeCenter("");
      term.red.bold("You are being redirected to the homepage...\n");
      makeCenter("");
      homePage();
    }
  }
}

export default page;
