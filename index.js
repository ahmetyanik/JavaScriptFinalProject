import homePage from "./Functions/homePage.js";

import ps from "prompt-sync";
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



homePage();


export {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject}