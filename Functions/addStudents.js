import ps from "prompt-sync";
const prompt = ps(); 
import {students,allStaff,classes} from "../DefaultPersons/defaultPersons.js";
import Student from "../Classes/Student.js";

function addStudent() {
    const addName = prompt("Name:");
    const addSurname = prompt("Surname:");
    const addPosition = "Student";
    const number = students.length + 11;
    const birthday = prompt("Birtday (day.month.year):");
    const address = prompt("Address:");
    console.log(
      `**The classes you can choose: ${classes.map((element) => element)}`
    );
    const className = prompt(`Please choose a class:`);
    const password = Math.floor(Math.random() * (9000 - 1000) + 1000);
    const notes = {
      math: [0, 0],
      music: [0, 0],
      english: [0, 0],
      history: [0, 0],
    };
  
    const newStudent = new Student(
      addName,
      addSurname,
      addPosition,
      number,
      birthday,
      address,
      className,
      password,
      notes
    );
  
    console.clear();
  
    console.log(
      `Student successfully registered!\nTemporary password: ${newStudent.password}`
    );
    newStudent.showInfos();
    students.push(newStudent);
    allStaff.push(newStudent);
  }

  export default addStudent;