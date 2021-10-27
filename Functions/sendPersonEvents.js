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