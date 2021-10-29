import ps from "prompt-sync";
const prompt = ps();


function progress(){
    let space = prompt(`Ilerlemek icin space tusuna basiniz...`);
    console.clear();    
}

export default progress;