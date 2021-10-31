import ps from "prompt-sync";
const prompt = ps();


function progress(){
    let space = prompt(`Press the space key to continue...`);
    console.clear();    
}

export default progress;