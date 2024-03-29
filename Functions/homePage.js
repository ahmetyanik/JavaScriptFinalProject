import makeCenter from "./makeCenter.js";
import page from "./identityControlPage.js";
import { setWhoIs } from "../States/states.js";

import ps from "prompt-sync";
const prompt = ps();

import terminal from "terminal-kit";
const term = terminal.terminal;

function homePage() {
  makeCenter("DCI HOMEPAGE");
  console.log();
  term.blue.bold("Please select your position\n");
  console.log();
  console.log("Director:1");
  console.log("Teacher :2");
  console.log("Student :3");
  console.log();

  makeCenter("");

  let choice = parseInt(prompt("Please select your choice!"));

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
      makeCenter("");
      term.red.bold("Please use a valid number!!!\n");
      makeCenter("");
      homePage();
  }

  return page();
}

export default homePage;
