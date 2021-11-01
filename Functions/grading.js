import makeCenter from "../Functions/makeCenter.js";
import {
  correctEncryptedPerson,
  studentIndex,
  correctEncryptedPersonBranch,
  setStudentIndex,
  correctEncryptedPersonObject,
} from "../States/states.js";
import { students } from "../DefaultPersons/defaultPersons.js";
import teacherEvents from "./teacherEvents.js";

import ps from "prompt-sync";
import progress from "./progress.js";
const prompt = ps();
import terminal from "terminal-kit";
const term = terminal.terminal;

function grading() {
  let isThereStudent = false;

  makeCenter("");

  const assignedClasses = correctEncryptedPersonObject.relatedClasses;
  let valid = false;

  term.yellow("**The classes you can choose:");
  console.log(`${assignedClasses}`);

  let choosenClass = prompt("");

  if (assignedClasses.includes(choosenClass)) {
    valid = true;
  }

  console.clear();

  if (valid === true) {
    makeCenter(`${choosenClass} Class List`);

    for (let i = 0; i < students.length; i++) {
      if (students[i].className === choosenClass) {
        console.log(students[i].fullName + ":" + students[i].studentNumber);
        isThereStudent = true;
      }
    }

    if (isThereStudent === false) {
      term.red.bold("There are no students in this class yet!\n");
      term.yellow.bold(
        "Press 1 to grade, press 2 to return to the teacher page:"
      );
      let choice = parseInt(prompt(""));
      console.clear();

      if (choice === 1) {
        grading();
      } else if (choice === 2) {
        teacherEvents();
      }
    }

    makeCenter("");
  } else {
    makeCenter("");
    console.log();
    term.red.bold("Please enter a valid class name!!!\n");
    console.log();
    grading();
  }

  let gradeStudentId = parseInt(
    prompt(
      `Dear ${correctEncryptedPerson} enter the number of the student you will grade:`
    )
  );
  let numberofStudent;
  let whichNote;

  for (const props in students) {
    if (students[props].studentNumber === gradeStudentId) {
      numberofStudent = gradeStudentId;
      setStudentIndex(props);
      break;
    }
  }

  if (numberofStudent == undefined) {
    console.log("Please enter a valid student number!!!");
    console.clear();
    grading();
  } else {
    selectNote();
  }

  function selectNote() {
    let whichOne = parseInt(
      prompt(`Press 1 for the first, press 2 for the second:`)
    );

    if (whichOne === 1) {
      whichNote = whichOne - 1;
    } else if (whichOne === 2) {
      whichNote = whichOne - 1;
    } else {
      console.log("Wrong choice!!! Please make a valid choice!");
      selectNote();
    }
  }

  let givenNote = parseInt(prompt("Please enter the grade you want to give:"));

  let whichBranch = students[studentIndex].notes[correctEncryptedPersonBranch];

  whichBranch[whichNote] = givenNote;

  console.clear();
  console.log();
  makeCenter("");
  term.green.bold(
    `${
      correctEncryptedPersonBranch.substring(0, 1).toUpperCase() +
      correctEncryptedPersonBranch.substring(1).toLowerCase()
    } grade saved successfully...\n`
  );
  console.log();

  console.log(
    students[studentIndex].name +"'s" +
    ` ${correctEncryptedPersonBranch} grades:`,
    whichBranch[0],
    whichBranch[1]
  );
  console.log();
  makeCenter("");
  progress();
  teacherEvents();
}

export default grading;
