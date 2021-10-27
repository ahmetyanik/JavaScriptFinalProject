import ortala from "./ortala.js";
import page from "./page.js";
import { whoIs } from "../index.js";

import ps from "prompt-sync";
const prompt = ps(); 



function homePage() {
    ortala("DCI HOMEPAGE");
  
    console.log("Please select your position");
    console.log("Director:1");
    console.log("Teacher:2");
    console.log("Student:3");
  
    let choice = parseInt(prompt("Please select your choise!"));
  
    console.clear();
  
    switch (choice) {
      case 1:
        whoIs = "director";
        break;
  
      case 2:
        whoIs = "teacher";
        break;
  
      case 3:
        whoIs = "student";
        break;
  
      default:
        console.log("Please use a valid number!!!");
        setTimeout(function () {
          homePage();
        }, 2000);
    }
  
    return page();
  }

  export default homePage;