import { students } from "../DefaultPersons/defaultPersons.js";

function showStudentLists() {
  for (let i = 0; i < students.length; i++) {
    students[i].showInfos();
  }
}

export default showStudentLists;
