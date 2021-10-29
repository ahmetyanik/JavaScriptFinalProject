import ortala from "./ortala.js";
import {correctEncryptedPerson,correctEncryptedPersonPosition} from "../States/states.js";

function title() {
  ortala(`${correctEncryptedPersonPosition.toUpperCase()} PAGE`);

  ortala(`${correctEncryptedPerson.toUpperCase()}`);
}

export default title;
