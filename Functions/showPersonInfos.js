import ortala from "../Functions/ortala.js";
import {
  whoIs,
  correctEncryptedPersonObject
} from "../States/states.js";

function showPersonInfos() {
  const person = correctEncryptedPersonObject;

  ortala(`${person.fullName.toUpperCase()}`);

  if (whoIs === "teacher") {
    console.log(`
        Branch           : ${
          person.branch.substring(0, 1).toUpperCase() +
          person.branch.substring(1).toLowerCase()
        }
        Assigned Classes : ${person.relatedClasses}`);
  }

  if (whoIs === "student") {
    console.log(`
        Student Number   : ${person.studentNumber}
        Class Name       : ${person.className}`);
  }

  console.log(`        Birthday         : ${person.birthday}
        Position         : ${person.position}
        Address          : ${person.address}
        Email            : ${person.mailAddress}
        Password         : ${person.password}
        `);
  ortala("");
}

export default showPersonInfos;
