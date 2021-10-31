import makeCenter from "../makeCenter.js";
import title from "../selectedPersonTitle.js";
import unreadMessageWarnings from "../unreadMessageWarning.js";

function studentOptions() {
  title();

  unreadMessageWarnings();
  console.log();

  console.log("Press 1 to change your password:");
  console.log("Press 2 to see your notes");
  console.log("Press 3 to see your information:");
  console.log("Press 4 to send message:");
  console.log("Press 5 to read your message:");
  console.log("Press 6 to return to the homepage:");
  console.log();
  makeCenter("");
}

export default studentOptions;
