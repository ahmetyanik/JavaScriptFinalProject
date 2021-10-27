function teacherEvents() {
    console.log("Press 1 to see your personal information:");
    console.log("Press 2 to see class list:");
    console.log("Press 3 to change password:");
    console.log("Press 4 to return to the homepage:");
    console.log("Press 5 to grade:");
    console.log("Press 6 to send a message:");
    console.log("Press 7 to read your message:");
  
    ortala("");
  
    let choice = parseInt(prompt("Select the action you want to do:"));
  
    console.clear();
  
    switch (choice) {
      case 1:
        showPersonInfos();
        teacherEvents();
        break;
  
      case 2:
        showClassList();
        teacherEvents();
        break;
  
      case 3:
        changePassword();
        teacherEvents();
        break;
  
      case 4:
        homePage();
        break;
  
      case 5:
        grading();
        break;
  
      case 6:
        sendMessage();
        break;
  
      case 7:
        readMessage();
        break;
    }
  
    ortala("");
  }

  export default teacherEvents;