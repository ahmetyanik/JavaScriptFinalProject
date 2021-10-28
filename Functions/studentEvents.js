import ortala from "./ortala.js";
import changePassword from "./changePassword.js";
import studentAllNotes from "./studentAllNotes.js";
import homePage from "./homePage.js";
import sendMessage from "./sendMessage.js";
import readMessage from "./readMessage.js";
import showPersonInfos from "./showPersonInfos.js";



import ps from "prompt-sync";
const prompt = ps(); 


function studentEvents() {
    console.log("Press 1 to change your password:");
    console.log("Press 2 to see your Notes");
    console.log("Press 3 to return to the homepage:");
    console.log("Press 4 to send message:");
    console.log("Press 5 to read your message:");
    console.log("Press 6 to see your informations:");
  
    ortala("");
  
    let choice = parseInt(prompt("Select the action you want to do:"));
  
    console.clear();
  
    switch (choice) {
      case 1:
        changePassword();
        studentEvents();
        break;
  
      case 2:
        studentAllNotes();
        studentEvents();
        break;
  
      case 3:
        homePage();
        break;
  
      case 4:
        sendMessage();
        break;
  
      case 5:
        readMessage();
        break;
  
      case 6:
        showPersonInfos();
        studentEvents();
        break;
    }
  
    ortala("");
  }

  export default studentEvents;