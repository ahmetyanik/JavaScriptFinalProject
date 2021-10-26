
const ps = require("prompt-sync");
const prompt = ps(); 



let whoIs = "";
let passwordCheck = false;
let correctEncryptedPerson = "";
let correctEncryptedPersonPosition = "";
let inqueriedClassName = "";
let newClass = "";
let studentIndex;
let correctEncryptedPersonBranch;
let correctEncryptedPersonObject;

class Person {
  static sum = 0;

  constructor(name, surname, position, birthday, address, password) {
    this.name = name;
    this.surname = surname;
    this.position = position;
    this.birthday = birthday;
    this.address = address;
    this.password = password;
    this.fullName = `${this.name} ${this.surname}`;
    this.mailAddress = (this.name + this.surname + "@dci.de").toLowerCase();
    this.messages = [];
    Person.sum++;
  }
}

class Teacher extends Person {
  constructor(
    name,
    surname,
    position,
    birthday,
    address,
    branch,
    password,
    relatedClasses,
    mailAddress
  ) {
    super(name, surname, position, birthday, address, password, mailAddress);
    this.branch = branch;
    this.relatedClasses = relatedClasses;
  }
}

class Student extends Person {
  constructor(
    name,
    surname,
    position,
    studentNumber,
    birthday,
    address,
    className,
    password,
    notes,
    mailAddress
  ) {
    super(name, surname, position, birthday, address, password, mailAddress);
    this.className = className;
    this.studentNumber = studentNumber;
    this.notes = notes;
  }
}

Student.prototype.showInfos = function () {


  ortala(`${this.name} ${this.surname}`);

  console.log(`
Name          :${this.fullName}
Birthday      :${this.birthday}
Address       :${this.address}
Class Name    :${this.className}
Student Number:${this.studentNumber}`
  );

  ortala("");

};

Student.prototype.avarageGrade = function () {
  let avarage = (
    (this.notes.math[0] +
      this.notes.math[1] +
      this.notes.music[0] +
      this.notes.music[1] +
      this.notes.english[0] +
      this.notes.english[1] +
      this.notes.history[0] +
      this.notes.history[1]) /
    8
  ).toFixed(2);
  return avarage;
};

class Message {
  constructor(message, fullName, from, to, isRead) {
    this.message = message;
    this.fullName = fullName;
    this.from = from;
    this.to = to;
    this.isRead = isRead;
  }
}

const ahmetYanik = new Student(
  "Ahmet",
  "Yanik",
  "Student",
  11,
  "16.12.1988",
  "Berlin",
  "1a",
  1234,
  { math: [3, 0], music: [1, 0], english: [4, 0], history: [2, 0] }
);

const angelinaJolie = new Student(
  "Angelina",
  "Jolie",
  "Student",
  12,
  "16.12.1988",
  "Berlin",
  "2a",
  1111,
  { math: [3, 0], music: [1, 0], english: [4, 0], history: [2, 0] }
);

const bradPitt = new Student(
  "Brad",
  "Pitt",
  "Student",
  13,
  "16.12.1988",
  "Berlin",
  "2a",
  1111,
  { math: [3, 0], music: [1, 0], english: [4, 0], history: [2, 0] }
);

const tomHanks = new Student(
  "Tom",
  "Hanks",
  "Student",
  14,
  "16.12.1988",
  "Berlin",
  "2a",
  1111,
  { math: [3, 0], music: [1, 0], english: [4, 0], history: [2, 0] }
);

const fatihTerim = new Teacher(
  "Fatih",
  "Terim",
  "Teacher",
  "12.03.1968",
  "Istanbul",
  "math",
  1235,

  ["1a", "1b", "2a", "2b"]
);

const hakanÜnsal = new Teacher(
  "Hakan",
  "Ünsal",
  "Teacher",
  "12.03.1968",
  "Istanbul",
  "math",
  1235,
  ["1a", "1b", "2a", "2b"]
);

const ümitDavala = new Teacher(
  "Ümit",
  "Davala",
  "Teacher",
  "12.03.1968",
  "Istanbul",
  "music",
  1235,
  ["1a", "1b", "2a", "2b"]
);

const hasanSas = new Teacher(
  "Hasan",
  "Sas",
  "Teacher",
  "12.03.1968",
  "Istanbul",
  "english",
  1111,
  ["1a", "1b", "2a", "2b"]
);

const hakanSukur = new Teacher(
  "Hakan",
  "Sukur",
  "Teacher",
  "12.03.1968",
  "Istanbul",
  "history",
  1111,
  ["1a", "1b", "2a", "2b"]
);

const unalAysal = new Teacher(
  "Ünal",
  "Aysal",
  "Director",
  "16.12.1960",
  "München",
  "Director",
  1236
);

const director = [unalAysal];
const teachers = [fatihTerim, hakanÜnsal, ümitDavala, hasanSas, hakanSukur];
const students = [ahmetYanik, angelinaJolie, bradPitt, tomHanks];
const allStaff = [...director, ...teachers, ...students];
const classes = ["1a", "1b", "2a", "2b", "3a", "3b"];

function ortala(str) {
  let stars = (50 - str.length) / 2;
  let newStr = "";

  if (str.length % 2 === 0) {
    for (let i = 0; i < stars; i++) {
      newStr += "*";
    }

    newStr += str;

    for (let i = 0; i < stars; i++) {
      newStr += "*";
    }
  } else {
    for (let i = 0; i < stars - 1; i++) {
      newStr += "*";
    }

    newStr += str;

    for (let i = 0; i < stars; i++) {
      newStr += "*";
    }
  }

  console.log(newStr);
}

function addStudent() {
  const addName = prompt("Name:");
  const addSurname = prompt("Surname:");
  const addPosition = "Student";
  const number = students.length + 11;
  const birthday = prompt("Birtday (day.month.year):");
  const address = prompt("address:");
  const className = prompt(`Please choose a class:\n
  ${classes.map(function (element) {
    return element;
  })} 
  `);
  const password = Math.floor(Math.random() * (9000 - 1000) + 1000);
  const notes = {
    math: [0, 0],
    music: [0, 0],
    english: [0, 0],
    history: [0, 0],
  };

  const newStudent = new Student(
    addName,
    addSurname,
    addPosition,
    number,
    birthday,
    address,
    className,
    password,
    notes
  );

  ortala("");

  console.log(`
  Student successfully registered!
  Temporary password: ${newStudent.password}`);
  newStudent.showInfos();
  students.push(newStudent);
  allStaff.push(newStudent);
}

function addClass() {
  newClass = prompt("Please enter the name of the class you want to add:");
  let isThere = false;

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === newClass) {

      isThere = true;
      break;
    } 
    
  }

  if(isThere===false){
    classes.push(newClass);
    ortala(`${newClass} succesfully added...`);
  }else{

    ortala(`Please write a different class name!!!`);

  }
}

function showStudentLists() {
  for (let i = 0; i < students.length; i++) {
    students[i].showInfos();
  }
}

function showClassList() {

  ortala("");
  inqueriedClassName = prompt(`Please write a class name:\nClasses you can choose: ${correctEncryptedPersonObject.relatedClasses}`
  );

  let permission = false;

  for (let i = 0; i < correctEncryptedPersonObject.relatedClasses.length; i++) {
    if (inqueriedClassName === correctEncryptedPersonObject.relatedClasses[i]) {
      permission = true;
    }
  }

  if (permission === true) {
    ortala(`${inqueriedClassName.toUpperCase()} CLASS LIST`);

    for (let i = 0; i < students.length; i++) {
      if (students[i].className === inqueriedClassName) {
        students[i].showInfos();
      }
    }
    ortala("");
  } else {
    choice = parseInt(
      prompt(
        `Wrong choice!!! Please select your assigned classes!\nPress 1 to return to the teacher page, and press 2 to display the class list again...`
      )
    );

    switch (choice) {
      case 1:
        teacherEvents();
        break;

      case 2:
        showClassList();
        break;

      default:
        console.log(`You are being redirected to the homepage...`);
        teacherEvents();
        break;
    }
  }
}

function changePassword() {
  let index;

  for (const props in allStaff) {
    if (allStaff[props].fullName === correctEncryptedPerson) {
      index = props;
      break;
    }
  }

  oldPassword = parseInt(prompt("Please type your current password:"));

  if (oldPassword === allStaff[index].password) {
    new1 = parseInt(prompt("Please type your new password:"));
    new2 = parseInt(prompt("Please re-type your new password:"));

    if (new1 === new2) {
      allStaff[index].password = new1;
      console.log("Your password has been successfully changed...");
      selectedContactPage();
    } else {
      console.log("New passwords do not match!");
      changePassword();
    }
  }
}

function studentAllNotes() {
  let index;
  let realStudent;

    if(whoIs==="director"){

        let numberEnteredStudent = parseInt(
          prompt(
            "Please enter the number of the student whose grades you want to see:"
          )
        );
      
        for (const props in students) {
          if (students[props].studentNumber === numberEnteredStudent) {
            index = props;
            break;
          }
        }
        realStudent = students[index];

    
    }else if(whoIs==="student"){

        realStudent = correctEncryptedPersonObject;
    }


  ortala(`${realStudent.fullName.toUpperCase()} GRADE INFORMATION`);

  console.log(`
Math          :${realStudent.notes.math[0]}---${realStudent.notes.math[1]}
Music         :${realStudent.notes.music[0]}---${realStudent.notes.music[1]}
English       :${realStudent.notes.english[0]}---${realStudent.notes.english[1]}
History       :${realStudent.notes.history[0]}---${realStudent.notes.history[1]}
------------------------
Not Avarage   :${realStudent.avarageGrade()}`
  );

  ortala("");

}

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

function grading() {
  Teacher;

  ortala("");

  let gradeStudentId = parseInt(
    prompt(
      `Dear ${correctEncryptedPerson} Enter the Number of the Student You Will Grade:`
    )
  );
  let numberofStudent;
  let whichNote;

  for (const props in students) {
    if (students[props].studentNumber === gradeStudentId) {
      numberofStudent = gradeStudentId;
      studentIndex = props;
      break;
    }
  }

  if (numberofStudent == undefined) {
    console.log("Please enter a valid student number!!!");
    grading();
  } else {
    selectNote();
  }

  function selectNote() {
    let whichOne = parseInt(
      prompt(`Press 1 for the first, press 2 for the second:`)
    );

    if (whichOne === 1) {
      whichNote = whichOne - 1;
    } else if (whichOne === 2) {
      whichNote = whichOne - 1;
    } else {
      console.log("Wrong choice!!! Please make a valid choice!");
      selectNote();
    }
  }

  let givenNote = parseInt(prompt("Please enter the grade you want to give:"));

  let whichBranch = students[studentIndex].notes[correctEncryptedPersonBranch];

  whichBranch[whichNote] = givenNote;

  console.log(
    students[studentIndex].name,
    `'s ${correctEncryptedPersonBranch} notes:`,
    whichBranch[0],
    whichBranch[1]
  );
  ortala("");
  teacherEvents();
}

function showPersonInfos() {
    
    const person = correctEncryptedPersonObject;

    
    
    ortala(`${person.name} ${person.surname}`)
    
    if(whoIs==="teacher"){
console.log(`
      Branch           : ${
        person.branch.substring(0, 1).toUpperCase() +
        person.branch.substring(1).toLowerCase()}
      Assigned Classes : ${person.relatedClasses}`)}

    if(whoIs==="student"){
        console.log(`
      Student Number   : ${person.studentNumber}
      Class Name       : ${person.className}`)}    
      
      
      console.log(`        
      Birthday         : ${person.birthday}
      Position         : ${person.position}
      Address          : ${person.address}
      Email            : ${person.mailAddress}
      Password         : ${person.password}`
          );

  ortala("");
}

function sendPersonEvents() {
  if (whoIs === "student") {
    studentEvents();
  } else if (whoIs === "teacher") {
    teacherEvents();
  } else if (whoIs === "director") {
    directorEvents();
  }
}

function sendMessage() {

  ortala("");
  let iletilmekIstenenKisiBulundu = false;

  let kime = prompt("Mesajinizi kime göndermek istiyorsunuz?");

  let gönderenMail = correctEncryptedPersonObject.mailAddress;
  let gönderenFullName = correctEncryptedPersonObject.fullName;

  let message = prompt("Lütfen mesajinizi giriniz:");

  const newMessage = new Message(
    message,
    gönderenFullName,
    gönderenMail,
    kime,
    false
  );

  for (let i = 0; i < allStaff.length; i++) {
    if (allStaff[i].mailAddress === kime) {
      allStaff[i].messages.push(newMessage);
      iletilmekIstenenKisiBulundu = true;
      break;
    }
  }

  if (iletilmekIstenenKisiBulundu === false) {
    console.log("Hatali mail adresi girdiniz!!!");
  }

  ortala("");

  sendPersonEvents();
}

function readMessage() {


  ortala(`${correctEncryptedPersonObject.fullName} Your Messages`)

 
  let comingMessages = correctEncryptedPersonObject.messages;

  for (let i = 0; i < comingMessages.length; i++) {
    console.log(
      `${comingMessages[comingMessages.length - 1 - i].fullName} : ${
        comingMessages[comingMessages.length - 1 - i].message
      }`
    );
  }

  ortala("");

  sendPersonEvents();
}


homePage();

function homePage() {
  ortala("DCI HOMEPAGE");

  console.log("Please select your position");
  console.log("Director:1");
  console.log("Teacher:2");
  console.log("Student:3");

  let choice = parseInt(prompt("Please select your choise!"));

  switch (choice) {
    case 1:
      whoIs = "director";
      break;

    case 2:
      whoIs = "teacher";
      break;

    case 3:
      whoIs = "student";
      break;

    default:
      console.log("Please use a valid number!!!");
      setTimeout(function () {
        homePage();
      }, 2000);
  }

  return page();
}

function page() {
  ortala(`${whoIs.toUpperCase()} IDENTITY CONTROL PAGE`);

  passwordCheck = false;

  let personName = prompt("Your Name and Surname:");
  let personPassword = parseInt(prompt("Your password:"));

  let arr;

  if (whoIs === "director") {
    arr = director;
  } else if (whoIs === "teacher") {
    arr = teachers;
  } else if (whoIs === "student") {
    arr = students;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].fullName === personName && arr[i].password === personPassword) {
      correctEncryptedPerson = arr[i].fullName;
      correctEncryptedPersonPosition = arr[i].position;
      correctEncryptedPersonObject = arr[i];
      passwordCheck = true;

      if (correctEncryptedPersonPosition === "Teacher") {
        correctEncryptedPersonBranch = arr[i].branch;
      }

      selectedContactPage();
      break;
    }
  }
  if (passwordCheck === false) {
    let choice = parseInt(
      prompt(
        "Incorrect Password!!!\nPress 1 to go to the homepage or press 2 to try again:"
      )
    );

    if (choice === 1) {
      homePage();
    } else if (choice === 2) {
      page(whoIs);
    } else {
      console.log("You are being redirected to the homepage...");

      setTimeout(function () {
        homePage();
      }, 2000);
    }
  }
}

function selectedContactPage() {
  function title() {
    ortala(`${correctEncryptedPersonPosition.toUpperCase()} PAGE`);

    ortala(`${correctEncryptedPerson.toUpperCase()}`);
  }

  switch (correctEncryptedPersonPosition) {
    case "Director":
      title();
      directorEvents();
      break;

    case "Teacher":
      title();
      teacherEvents();
      break;

    case "Student":
      title();
      studentEvents();
      break;

    default:
      console.log("Hata");
  }
}

function directorEvents() {

  console.log("Press 1 to register a student:");
  console.log("Press 2 to create new class:");
  console.log("Press 3 to see registered students:");
  console.log("Press 4 to see student grade information:");
  console.log("Press 5 to change password:");
  console.log("Press 6 to see general information of the school:");
  console.log("Press 7 to return to the homepage:");
  console.log("Press 8 to send a message:");
  console.log("Press 9 to read your messages:");

  ortala("");

  let choice = parseInt(prompt("Select the action you want to do:"));

  switch (choice) {
    case 1:
      addStudent();
      directorEvents();
      break;

    case 2:
      addClass();
      directorEvents();

    case 3:
      showStudentLists();
      directorEvents();
      break;

    case 4:
      studentAllNotes();
      directorEvents();
      break;

    case 5:
      changePassword();
      directorEvents();
      break;

    case 6:
      schoolGeneralInformation();
      directorEvents();

    case 7:
      homePage();
      break;

    case 8:
      sendMessage();
      break;

    case 9:
      readMessage();
      break;
  }

  ortala();
}

function teacherEvents() {
  
  console.log("Press 1 to see your personal information:");
  console.log("Press 2 to see class list:");
  console.log("Press 3 to change password:");
  console.log("Press 4 to return to the homepage:");
  console.log("Press 5 to grade:");
  console.log("Press 6 to send a message:");
  console.log("Press 7 to read your message:");

  ortala("");

  let choice = parseInt(prompt("Select the action you want to do:"));

  switch (choice) {
    case 1:
      showPersonInfos();
      teacherEvents();
      break;

    case 2:
      showClassList();
      teacherEvents();
      break;

    case 3:
      changePassword();
      teacherEvents();
      break;

    case 4:
      homePage();
      break;

    case 5:
      grading();
      break;

    case 6:
      sendMessage();
      break;

    case 7:
      readMessage();
      break;
  }

  ortala("");
}

function studentEvents() {

  console.log("Press 1 to change your password:");
  console.log("Press 2 to see your Notes");
  console.log("Press 3 to return to the homepage:");
  console.log("Press 4 to send message:");
  console.log("Press 5 to read your message:");
  console.log("Press 6 to see your informations:");

  ortala("");

  let choice = parseInt(prompt("Select the action you want to do:"));

  switch (choice) {
    case 1:
      changePassword();
      studentEvents();
      break;

    case 2:
      studentAllNotes();
      studentEvents();
      break;

    case 3:
      homePage();
      break;

    case 4:
      sendMessage();
      break;

    case 5:
      readMessage();
      break;

    case 6:
      showPersonInfos();
      studentEvents();
      break;
  }

  ortala("");
}
