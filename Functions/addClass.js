import {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject,setWhoIs,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setNewClass} from "../States/states.js";
import { director, teachers, students, allStaff, classes } from "../DefaultPersons/defaultPersons.js";
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
      classes.push(newClass);
      ortala(`${newClass} successfully added...`);
    } else {
      ortala(`Please write a different class name!!!`);
    }
  }

  export default addClass;