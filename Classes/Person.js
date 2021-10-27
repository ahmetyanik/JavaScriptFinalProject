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


  export default Person;
  