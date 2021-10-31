import { newClass, setNewClass } from "../States/states.js";
import { classes, teachers } from "../DefaultPersons/defaultPersons.js";
import makeCenter from "./makeCenter.js";

import ps from "prompt-sync";
const prompt = ps();
import terminal from "terminal-kit";
const term = terminal.terminal;

function addClass() {
  makeCenter(`Creating a New Class`);

  console.log();
  setNewClass(prompt("Please enter the name of the class you want to add:"));
  let isThere = false;

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === newClass) {
      isThere = true;
      break;
    }
  }

  if (isThere === false) {
    const assignedTeachers = [];

    function choosingTeacher(ders) {
      let index = 1;
      const filteredTeachers = [];

      makeCenter(`${ders.toUpperCase()} TEACHERS`);

      teachers.forEach((teacher) => {
        if (ders === teacher.branch) {
          console.log(`Please enter ${index} to assign ${teacher.fullName}:`);
          filteredTeachers.push(teacher);
          index++;
        }
      });

      let desiredTeacher = parseInt(prompt(`Your choise:`));

      filteredTeachers[desiredTeacher - 1].relatedClasses.push(newClass);

      assignedTeachers.push(filteredTeachers[desiredTeacher - 1]);

      console.log(
        `
${filteredTeachers[desiredTeacher - 1].fullName} assigned as ${
          filteredTeachers[desiredTeacher - 1].branch
        } teacher.
`
      );
    }

    choosingTeacher("math");
    choosingTeacher("music");
    choosingTeacher("english");
    choosingTeacher("history");

    classes.push(newClass);
    console.clear();
    makeCenter(`${newClass.toUpperCase()}`);
    console.log();
    assignedTeachers.forEach((teacher) => {
      console.log(`${teacher.fullName} assigned as ${teacher.branch} teacher.`);
    });
    console.log();
    term.green.bold("Class succesfully created.\n");
    makeCenter("");
  } else {
    console.log();
    makeCenter("");
    term.red.bold("Please write a different class name!!!\n");
    makeCenter("");
  }
}

export default addClass;
