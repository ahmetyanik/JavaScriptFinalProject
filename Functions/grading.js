import ortala from "../Functions/ortala.js";
import {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject,setWhoIs,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setNewClass,setStudentIndex} from "../States/states.js";
import { director, teachers, students, allStaff, classes } from "../DefaultPersons/defaultPersons.js";
import teacherEvents from "./teacherEvents.js";

import ps from "prompt-sync";
const prompt = ps(); 

function grading() {
   
  
    ortala("");
  
    let gradeStudentId = parseInt(
      prompt(
        `Dear ${correctEncryptedPerson} Enter the Number of the Student You Will Grade:`
      )
    );
    let numberofStudent;
    let whichNote;
  
    for (const props in students) {
      if (students[props].studentNumber === gradeStudentId) {
        numberofStudent = gradeStudentId;
        setStudentIndex(props)
        break;
      }
    }
  
    if (numberofStudent == undefined) {
      console.log("Please enter a valid student number!!!");
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
  
    console.log(
      students[studentIndex].name,
      `'s ${correctEncryptedPersonBranch} notes:`,
      whichBranch[0],
      whichBranch[1]
    );
    ortala("");
    teacherEvents();
  }

  export default grading;