import makeCenter from "../makeCenter.js";
import title from "../selectedPersonTitle.js";
import unreadMessageWarnings from "../unreadMessageWarning.js";

function teacherOptions(){

    title();
    unreadMessageWarnings();
    console.log();
    console.log("Press 1 to see your personal information:");
    console.log("Press 2 to see class list:");
    console.log("Press 3 to change password:");
    console.log("Press 4 to grade:");
    console.log("Press 5 to send a message:");
    console.log("Press 6 to read your message:");
    console.log("Press 7 to return to the homepage:");
    console.log();
    makeCenter("");
}

export default teacherOptions;