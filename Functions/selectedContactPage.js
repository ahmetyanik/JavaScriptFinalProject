import {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject,setWhoIs,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setNewClass} from "../States/states.js";
import ortala from "./ortala.js";
import directorEvents from "./directorEvents.js";
import teacherEvents from "./teacherEvents.js";
import studentEvents from "./studentEvents.js";

function selectedContactPage() {
    function title() {
      ortala(`${correctEncryptedPersonPosition.toUpperCase()} PAGE`);
  
      ortala(`${correctEncryptedPerson.toUpperCase()}`);
    }
  
    switch (correctEncryptedPersonPosition) {
      case "Director":
        title();
        directorEvents();
        break;
  
      case "Teacher":
        title();
        teacherEvents();
        break;
  
      case "Student":
        title();
        studentEvents();
        break;
  
      default:
        console.log("Hata");
    }
  }

  export default selectedContactPage;