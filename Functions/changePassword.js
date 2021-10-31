import { correctEncryptedPerson } from "../States/states.js";
import { allStaff } from "../DefaultPersons/defaultPersons.js";
import ortala from "./ortala.js";
import selectedPersonPage from "./selectedPersonPage.js";
import progress from "./progress.js";

import ps from "prompt-sync";
const prompt = ps();
import terminal from "terminal-kit";
import homePage from "./homePage.js";
const term = terminal.terminal;

function changePassword() {
  let index;
  let new1 = true;
  let new2 = false;

  for (const props in allStaff) {
    if (allStaff[props].fullName === correctEncryptedPerson) {
      index = props;
      break;
    }
  }

  ortala("");
  let oldPassword = parseInt(prompt("Please type your current password:"));

  if (oldPassword === allStaff[index].password) {
    new1 = parseInt(prompt("Please type your new password:"));
    new2 = parseInt(prompt("Please re-type your new password:"));

    console.clear();
  } else {
    console.clear();
    ortala("");

    term.red.bold("Incorrect Password!!!\n");
    term.yellow.bold("Please enter your current valid password!\n");
    ortala("");

    let choice = parseInt(
      prompt("Press 1 to go to the homepage or press 2 to try again:")
    );
    console.clear();

    if (choice === 1) {
      homePage();
    } else if (choice === 2) {
      changePassword();
    } else {
      ortala("");
      term.red.bold("You are being redirected to the homepage...\n");
      ortala("");
      homePage();
    }
  }

  if (new1 === new2) {
    allStaff[index].password = new1;
    ortala("");
    term.green("Your password has been successfully changed...\n");
    ortala("");

    progress();
    selectedPersonPage();
  } else {
    ortala("");
    term.red("New passwords do not match!\n");
    changePassword();
  }
}

export default changePassword;
