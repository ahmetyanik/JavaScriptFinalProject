function changePassword() {
    let index;
    let new1;
    let new2;
  
    for (const props in allStaff) {
      if (allStaff[props].fullName === correctEncryptedPerson) {
        index = props;
        break;
      }
    }
  
    oldPassword = parseInt(prompt("Please type your current password:"));
  
    if (oldPassword === allStaff[index].password) {
      new1 = parseInt(prompt("Please type your new password:"));
      new2 = parseInt(prompt("Please re-type your new password:"));
  
      console.clear();
    } else {
      console.clear();
      console.log("Please enter your valid old password!");
  
      let choice = parseInt(
        prompt(
          "Incorrect Password!!!\nPress 1 to go to the homepage or press 2 to try again:"
        )
      );
  
      console.clear();
  
      if (choice === 1) {
        homePage();
      } else if (choice === 2) {
        changePassword();
      } else {
        console.log("You are being redirected to the homepage...");
  
        setTimeout(function () {
          homePage();
        }, 2000);
      }
    }
  
    if (new1 === new2) {
      allStaff[index].password = new1;
      ortala("");
      console.log("Your password has been successfully changed...");
      selectedContactPage();
    } else {
      console.log("New passwords do not match!");
      changePassword();
    }
  }


  export default changePassword;