import { whoIs, correctEncryptedPersonObject } from "../States/states.js";
import { students } from "../DefaultPersons/defaultPersons.js";
import makeCenter from "./makeCenter.js";

import ps from "prompt-sync";
const prompt = ps();

function studentAllNotes() {
  let index;
  let realStudent;

  if (whoIs === "director") {
    makeCenter(`STUDENT LIST OF DCI`);
    console.log();

    for (let i = 0; i < students.length; i++) {
      console.log(students[i].fullName + ":" + students[i].studentNumber);
    }
    console.log();
    makeCenter("");

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

  makeCenter(`${realStudent.fullName.toUpperCase()} GRADE INFORMATION`);

  console.log(`
  Math          :${realStudent.notes.math[0]}---${realStudent.notes.math[1]}
  Music         :${realStudent.notes.music[0]}---${realStudent.notes.music[1]}
  English       :${realStudent.notes.english[0]}---${
    realStudent.notes.english[1]
  }
  History       :${realStudent.notes.history[0]}---${
    realStudent.notes.history[1]
  }
  ------------------------
  Note Average   :${realStudent.averageGrade()}`);
  console.log();

  makeCenter("");
}

export default studentAllNotes;
