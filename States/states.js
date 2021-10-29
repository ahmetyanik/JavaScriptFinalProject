let whoIs = "";
let passwordCheck = false;
let correctEncryptedPerson = "";
let correctEncryptedPersonPosition = "";
let inqueriedClassName = "";
let newClass = "";
let studentIndex;
let correctEncryptedPersonBranch;
let correctEncryptedPersonObject;
let newMessage;

function setWhoIs(name){

    whoIs = name;
}

function setPassword(password){

    passwordCheck = password;
}

function setCorrectEncryptedPerson(person){

    correctEncryptedPerson = person;
}

function setCorrectEncryptedPersonPosition(position){

    correctEncryptedPersonPosition = position;
}

function setCorrectEncryptedPersonObject(object){

    correctEncryptedPersonObject = object;
}

function setNewClass(className){

    newClass = className;
}

function setCorrectEncryptedPersonBranch(branch){

    correctEncryptedPersonBranch = branch;
}


function setInqueriedClassName(className){

    inqueriedClassName = className;
}

function setStudentIndex(index){

    studentIndex = index;
}

function setNewMessage(message){
    newMessage = message;
}


export {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject,setWhoIs,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setNewClass,setCorrectEncryptedPersonBranch,setInqueriedClassName,setStudentIndex,setNewMessage}