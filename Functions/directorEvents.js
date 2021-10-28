import ortala from "../Functions/ortala.js";
import addStudent from "./addStudents.js";
import addClass from "./addClass.js";
import showStudentLists from "./showStudentLists.js";
import studentAllNotes from "./studentAllNotes.js";
import changePassword from "./changePassword.js";
import schoolGeneralInformation from "./schoolGeneralInformation.js";
import homePage from "./homePage.js";
import sendMessage from "./sendMessage.js";
import readMessage from "./readMessage.js";
import showPersonInfos from "./showPersonInfos.js";


import ps from "prompt-sync";
const prompt = ps(); 

function directorEvents() {
    console.log("Press 1 to register a student:");
    console.log("Press 2 to create new class:");
    console.log("Press 3 to see registered students:");
    console.log("Press 4 to see student grade information:");
    console.log("Press 5 to change password:");
    console.log("Press 6 to see general information of the school:");
    console.log("Press 7 to return to the homepage:");
    console.log("Press 8 to send a message:");
    console.log("Press 9 to read your messages:");
    console.log("Press 10 to see your personal informations:");
  
    ortala("");
  
    let choice = parseInt(prompt("Select the action you want to do:"));
  
    console.clear();
  
    switch (choice) {
      case 1:
        addStudent();
        directorEvents();
        break;
  
      case 2:
        addClass();
        directorEvents();
  
      case 3:
        showStudentLists();
        directorEvents();
        break;
  
      case 4:
        studentAllNotes();
        directorEvents();
        break;
  
      case 5:
        changePassword();
        directorEvents();
        break;
  
      case 6:
        schoolGeneralInformation();
        directorEvents();
  
      case 7:
        homePage();
        break;
  
      case 8:
        sendMessage();
        break;
  
      case 9:
        readMessage();
        break;
  
      case 10:
        showPersonInfos();
        directorEvents();
        break;
    }
  
    ortala("");
  }

  export default directorEvents;