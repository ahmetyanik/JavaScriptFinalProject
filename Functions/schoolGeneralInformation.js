import ortala from "./ortala.js";
import {teachers,students,allStaff,classes} from "../DefaultPersons/defaultPersons.js";

function schoolGeneralInformation() {
    ortala("DCI");
  
    console.log(`
  Total Number of Personnel :${allStaff.length}
  Number of Managers        :1
  Total Number of Teachers  :${teachers.length}
  Total Number of Students  :${students.length}
  Total Number of Classes   :${classes.length}`);
  
    ortala("");
  }

  export default schoolGeneralInformation;