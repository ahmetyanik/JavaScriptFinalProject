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

export default ortala;