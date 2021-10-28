import studentEvents from "./studentEvents.js";
import teacherEvents from "./teacherEvents.js";
import directorEvents from "./directorEvents.js";
import {whoIs} from "../States/states.js";

import ps from "prompt-sync";
const prompt = ps();


function sendPersonEvents() {
    if (whoIs === "student") {
      studentEvents();
    } else if (whoIs === "teacher") {
      teacherEvents();
    } else if (whoIs === "director") {
      directorEvents();
    }
  }

  export default sendPersonEvents;