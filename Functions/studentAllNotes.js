import {whoIs,correctEncryptedPersonObject} from "../States/states.js";
import {students } from "../DefaultPersons/defaultPersons.js";
import ortala from "./ortala.js";



import ps from "prompt-sync";
const prompt = ps(); 


function studentAllNotes() {
    let index;
    let realStudent;
  
    if (whoIs === "director") {

      
      ortala(`STUDENT LIST OF DCI`)

      for (let i = 0; i < students.length; i++) {
          console.log(students[i].fullName + ":" + students[i].studentNumber);       
      }

      ortala("");

      let numberEnteredStudent = parseInt(
        prompt(
          "Please enter the number of the student whose grades you want to see:"
        )
      );
  
      console.clear();
  
      for (const props in students) {
        if (students[props].studentNumber === numberEnteredStudent) {
          index = props;
          break;
        }
      }
      realStudent = students[index];
    } else if (whoIs === "student") {
      realStudent = correctEncryptedPersonObject;
    }
  
    ortala(`${realStudent.fullName.toUpperCase()} GRADE INFORMATION`);
  
    console.log(`
  Math          :${realStudent.notes.math[0]}---${realStudent.notes.math[1]}
  Music         :${realStudent.notes.music[0]}---${realStudent.notes.music[1]}
  English       :${realStudent.notes.english[0]}---${realStudent.notes.english[1]}
  History       :${realStudent.notes.history[0]}---${realStudent.notes.history[1]}
  ------------------------
  Not Avarage   :${realStudent.avarageGrade()}`);
  
    ortala("");
  }


  export default studentAllNotes;