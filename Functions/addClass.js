function addClass() {
    newClass = prompt("Please enter the name of the class you want to add:");
    let isThere = false;
  
    for (let i = 0; i < classes.length; i++) {
      if (classes[i] === newClass) {
        isThere = true;
        break;
      }
    }
  
    if (isThere === false) {
      classes.push(newClass);
      ortala(`${newClass} successfully added...`);
    } else {
      ortala(`Please write a different class name!!!`);
    }
  }

  export default addClass;