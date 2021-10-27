import Person from "./Person.js";

class Teacher extends Person {
    constructor(
      name,
      surname,
      position,
      birthday,
      address,
      branch,
      password,
      relatedClasses,
      mailAddress
    ) {
      super(name, surname, position, birthday, address, password, mailAddress);
      this.branch = branch;
      this.relatedClasses = relatedClasses;
    }
  }

  export default Teacher;