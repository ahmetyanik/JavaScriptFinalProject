let whoIs = "";
let passwordCheck = false;
let correctEncryptedPerson = "";
let correctEncryptedPersonPosition = "";
let inqueriedClassName = "";
let newClass = "";
let studentIndex;
let correctEncryptedPersonBranch;
let correctEncryptedPersonObject;
let correctEncryptedPersonNewMessageNumber;

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
    correctEncryptedPersonNewMessage = message;
}


export {whoIs,passwordCheck,correctEncryptedPerson,correctEncryptedPersonPosition,inqueriedClassName,newClass,studentIndex,correctEncryptedPersonBranch,correctEncryptedPersonObject,correctEncryptedPersonNewMessageNumber,setWhoIs,setPassword,setCorrectEncryptedPerson,setCorrectEncryptedPersonPosition,setCorrectEncryptedPersonObject,setNewClass,setCorrectEncryptedPersonBranch,setInqueriedClassName,setStudentIndex,setNewMessage}