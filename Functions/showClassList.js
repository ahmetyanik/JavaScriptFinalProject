import ortala from "./ortala.js";
import teacherEvents from "./teacherEvents.js";
import {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject,setWhoIs,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setNewClass,setInqueriedClassName} from "../States/states.js";
import { director, teachers, students, allStaff, classes } from "../DefaultPersons/defaultPersons.js";

import ps from "prompt-sync";
const prompt = ps();

function showClassList() {
    ortala("");
    console.log(
      `Classes you can choose: ${correctEncryptedPersonObject.relatedClasses}`
    );
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
    } else {
      choice = parseInt(
        prompt(
          `Wrong choice!!! Please select your assigned classes!\nPress 1 to return to the teacher page, and press 2 to display the class list again...`
        )
      );
  
      switch (choice) {
        case 1:
          teacherEvents();
          break;
  
        case 2:
          showClassList();
          break;
  
        default:
          console.log(`You are being redirected to the homepage...`);
          teacherEvents();
          break;
      }
    }
  }

  export default showClassList;