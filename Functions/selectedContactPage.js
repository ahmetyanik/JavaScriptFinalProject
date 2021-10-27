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