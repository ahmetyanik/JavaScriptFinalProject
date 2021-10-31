import makeCenter from "./makeCenter.js";
import {correctEncryptedPerson,correctEncryptedPersonPosition} from "../States/states.js";

function title() {
  makeCenter(`${correctEncryptedPersonPosition.toUpperCase()} PAGE`);

  makeCenter(`${correctEncryptedPerson.toUpperCase()}`);
}

export default title;
