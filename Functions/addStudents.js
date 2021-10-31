import ps from "prompt-sync";
const prompt = ps();
import {
  students,
  allStaff,
  classes,
} from "../DefaultPersons/defaultPersons.js";
import Student from "../Classes/Student.js";
import makeCenter from "./makeCenter.js";

import terminal from "terminal-kit";
const term = terminal.terminal;

function addStudent() {
  let isClass = false;

  makeCenter(`Student Registration`);
  console.log();
  const addName = prompt("Name:");
  const addSurname = prompt("Surname:");
  const addPosition = "Student";
  const number = students.length + 11;
  const birthday = prompt("Birtday (day.month.year):");
  const address = prompt("Address:");
  term.yellow("**The classes you can choose:");
  console.log(`${classes.map((element) => element)}`);
  let className = prompt(`Please choose a class:`);

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === className) {
      isClass = true;
      break;
    } else {
      isClass = false;
    }
  }

  if (isClass === false) {
    makeCenter("");
    term.red.bold("Please enter a valid class name!\n");
    makeCenter("");
    className = prompt(`Please choose a class:`);
  }

  const password = Math.floor(Math.random() * (9000 - 1000) + 1000);
  const notes = {
    math: [0, 0],
    music: [0, 0],
    english: [0, 0],
    history: [0, 0],
  };

  const newStudent = new Student(
    addName,
    addSurname,
    addPosition,
    number,
    birthday,
    address,
    className,
    password,
    notes
  );

  console.clear();

  makeCenter(``);
  term.green("Student successfully registered!\n");
  term.yellow("Temporary password:  ");
  console.log(`${newStudent.password}`);
  newStudent.showInfos();
  students.push(newStudent);
  allStaff.push(newStudent);
}

export default addStudent;
