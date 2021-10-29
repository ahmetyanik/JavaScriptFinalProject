import Teacher from "../Classes/Teacher.js";
import Student from "../Classes/Student.js";

const maximMustermann = new Teacher(
  "Maxim",
  "Mustermann",
  "Director",
  "16.12.1960",
  "München",
  "Director",
  1236
);

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

const tuncaySanli = new Teacher(
  "Tuncay",
  "Sanli",
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
  ["2b"]
);

const ümitKaran = new Teacher(
  "Ümit",
  "Karan",
  "Teacher",
  "12.03.1968",
  "Istanbul",
  "history",
  1111,
  ["1a"]
);

const director = [maximMustermann];
const teachers = [fatihTerim, hakanÜnsal, ümitDavala, hasanSas, hakanSukur,tuncaySanli,ümitKaran];
const students = [ahmetYanik, angelinaJolie, bradPitt, tomHanks];
const allStaff = [...director, ...teachers, ...students];
const classes = ["1a", "1b", "2a", "2b", "3a", "3b"];

export { director, teachers, students, allStaff, classes };
