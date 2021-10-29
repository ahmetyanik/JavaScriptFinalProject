import {correctEncryptedPerson,correctEncryptedPersonPosition} from "../States/states.js";
import directorEvents from "./directorEvents.js";
import teacherEvents from "./teacherEvents.js";
import studentEvents from "./studentEvents.js";

function selectedPersonPage() {
  
    switch (correctEncryptedPersonPosition) {
      case "Director":
        directorEvents();
        break;
  
      case "Teacher":
        teacherEvents();
        break;
  
      case "Student":
        studentEvents();
        break;
  
      default:
        console.log("Hata");
    }
  }

  export default selectedPersonPage;