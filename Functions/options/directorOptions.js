import title from "../selectedPersonTitle.js";
import makeCenter from "../makeCenter.js";
import unreadMessageWarnings from "../unreadMessageWarning.js";
import terminal from "terminal-kit";
const term = terminal.terminal;

function directorOptions() {
  title();
  unreadMessageWarnings();
  console.log();

  console.log("Press 1 to register a student:");
  console.log("Press 2 to create new class:");
  console.log("Press 3 to see registered students:");
  console.log("Press 4 to see student grade information:");
  console.log("Press 5 to change password:");
  console.log("Press 6 to see general information of the school:");
  console.log("Press 7 to send a message:");
  console.log("Press 8 to read your messages:");
  console.log("Press 9 to see your personal information:");
  console.log("Press 10 to return to the homepage:");
  console.log();

  makeCenter("");
}

export default directorOptions;
