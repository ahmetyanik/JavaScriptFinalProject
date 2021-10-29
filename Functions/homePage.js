import ortala from "./ortala.js";
import page from "./identityControlPage.js";
import { setWhoIs } from "../States/states.js";


import ps from "prompt-sync";
const prompt = ps(); 



function homePage() {
    ortala("DCI HOMEPAGE");
  
    console.log("Please select your position");
    console.log("Director:1");
    console.log("Teacher:2");
    console.log("Student:3");

    ortala("");
  
    let choice = parseInt(prompt("Please select your choise!"));
  
    console.clear();
  
    switch (choice) {
      case 1:
        setWhoIs("director");
        break;
  
      case 2:
        setWhoIs("teacher");
        break;
  
      case 3:
        setWhoIs("student");
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