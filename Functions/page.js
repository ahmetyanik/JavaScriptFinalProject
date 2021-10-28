import ortala from "./ortala.js";
import {whoIs,passwordCheck,correctEncryptedPersonPosition,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setCorrectEncryptedPersonBranch} from "../States/states.js";
import { director, teachers, students } from "../DefaultPersons/defaultPersons.js";
import selectedContactPage from "./selectedContactPage.js";

import ps from "prompt-sync";
const prompt = ps(); 

function page() {
    ortala(`${whoIs.toUpperCase()} IDENTITY CONTROL PAGE`);
  
    setPassword(false);
  
    let personName = prompt("Your Name and Surname:");
    let personPassword = parseInt(prompt("Your password:"));
  
    console.clear();
  
    let arr;
  
    if (whoIs === "director") {
      arr = director;
    } else if (whoIs === "teacher") {
      arr = teachers;
    } else if (whoIs === "student") {
      arr = students;
    }
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].fullName === personName && arr[i].password === personPassword) {

        setCorrectEncryptedPerson(arr[i].fullName);
        setCorrectEncryptedPersonPosition(arr[i].position);
        setCorrectEncryptedPersonObject(arr[i]);
        setPassword(true);
  
        if (correctEncryptedPersonPosition === "Teacher") {
          setCorrectEncryptedPersonBranch(arr[i].branch);
        }
  
        selectedContactPage();
        break;
      }
    }
    if (passwordCheck === false) {
      console.log("Incorrect Password!!!");
      let choice = parseInt(
        prompt(
          "Press 1 to go to the homepage or press 2 to try again:"
        )
      );
  
      console.clear();
  
      if (choice === 1) {
        homePage();
      } else if (choice === 2) {
        page(whoIs);
      } else {
        console.log("You are being redirected to the homepage...");
  
        setTimeout(function () {
          homePage();
        }, 2000);
      }
    }
  }

  export default page;