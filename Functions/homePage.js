import ortala from "./ortala.js";
import page from "./identityControlPage.js";
import { setWhoIs } from "../States/states.js";

import ps from "prompt-sync";
const prompt = ps();
import "console-success";

import terminal from "terminal-kit";
const term = terminal.terminal;

function homePage() {
  ortala("DCI HOMEPAGE");
  console.log();
  term.blue.bold("Please select your position\n");
  console.log();
  console.log("Director:1");
  console.log("Teacher:2");
  console.log("Student:3");
  console.log();

  ortala("");

  let choice = parseInt(prompt("Please select your choise!"));

  console.clear();

  switch (choice) {
    case 1:
      setWhoIs("director");
      break;

    case 2:
      setWhoIs("teacher");
      break;

    case 3:
      setWhoIs("student");
      break;

    default:
      ortala("");
      term.red.bold("Please use a valid number!!!\n");
      ortala("");
      homePage();
  }

  return page();
}

export default homePage;
