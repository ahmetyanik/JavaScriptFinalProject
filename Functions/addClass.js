import { newClass, setNewClass } from "../States/states.js";
import { classes, teachers } from "../DefaultPersons/defaultPersons.js";
import ortala from "./ortala.js";

import ps from "prompt-sync";
const prompt = ps();

function addClass() {
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

      ortala(`${ders.toUpperCase()} TEACHERS`);

      teachers.forEach((teacher) => {
        if (ders === teacher.branch) {
          console.log(
            `Please enter ${index} to choose ${teacher.fullName}:`
          );
          filteredTeachers.push(teacher);
          index++;
        }
      });

      let desiredTeacher = parseInt(prompt(``));

      filteredTeachers[desiredTeacher - 1].relatedClasses.push(
        newClass
      );

      assignedTeachers.push(filteredTeachers[desiredTeacher - 1]);

      console.log(
        `${filteredTeachers[desiredTeacher - 1].fullName} ${filteredTeachers[desiredTeacher - 1].branch} ögretmeni olarak atandi` 
      );
    }

    choosingTeacher("math");
    choosingTeacher("music");
    choosingTeacher("english");
    choosingTeacher("history");

    classes.push(newClass);
    console.clear();
    ortala(`${newClass.toUpperCase()} Class Successfully Created`);
    assignedTeachers.forEach((teacher)=>{

      console.log(`${teacher.fullName} assigned as ${teacher.branch} teacher.`);

    })
    ortala("");
  } else {
    ortala(`Please write a different class name!!!`);
  }
}

export default addClass;
