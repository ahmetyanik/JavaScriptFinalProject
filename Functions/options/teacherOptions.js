import ortala from "../ortala.js";
import title from "../selectedPersonTitle.js";

function teacherOptions(){

    title();
    console.log();
    console.log("Press 1 to see your personal information:");
    console.log("Press 2 to see class list:");
    console.log("Press 3 to change password:");
    console.log("Press 4 to grade:");
    console.log("Press 5 to send a message:");
    console.log("Press 6 to read your message:");
    console.log("Press 7 to return to the homepage:");
    console.log();
    ortala("");
}

export default teacherOptions;