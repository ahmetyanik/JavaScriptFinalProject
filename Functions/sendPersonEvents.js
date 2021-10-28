import ortala from "./ortala.js";
import studentEvents from "./studentEvents.js";
import teacherEvents from "./teacherEvents.js";
import directorEvents from "./directorEvents.js";
import Message from "../Classes/Message.js";
import {
  director,
  teachers,
  students,
  allStaff,
  classes,
} from "../DefaultPersons/defaultPersons.js";
import {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject,setWhoIs,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setNewClass} from "../States/states.js";

import ps from "prompt-sync";
const prompt = ps();


function sendPersonEvents() {
    if (whoIs === "student") {
      studentEvents();
    } else if (whoIs === "teacher") {
      teacherEvents();
    } else if (whoIs === "director") {
      directorEvents();
    }
  }

  export default sendPersonEvents;