import Person from "./Person.js";
import makeCenter from "../Functions/makeCenter.js";

class Student extends Person {
    constructor(
      name,
      surname,
      position,
      studentNumber,
      birthday,
      address,
      className,
      password,
      notes,
      mailAddress
    ) {
      super(name, surname, position, birthday, address, password, mailAddress);
      this.className = className;
      this.studentNumber = studentNumber;
      this.notes = notes;
    }
  }
  
  Student.prototype.showInfos = function () {
    makeCenter(`${this.name} ${this.surname}`);
  
    console.log(`
  Name           :${this.fullName}
  Birthday       :${this.birthday}
  Address        :${this.address}
  Class Name     :${this.className}
  Student Number :${this.studentNumber}
  E-mail Address :${this.mailAddress}
  `);
  
    makeCenter("");
  };
  
  Student.prototype.averageGrade = function () {
    let average = (
      (this.notes.math[0] +
        this.notes.math[1] +
        this.notes.music[0] +
        this.notes.music[1] +
        this.notes.english[0] +
        this.notes.english[1] +
        this.notes.history[0] +
        this.notes.history[1]) /
      8
    ).toFixed(2);
    return average;
  };

  export default Student;