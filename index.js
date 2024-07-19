class People {

  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  hi() {
    return `Hola, soy ${this.name} ${this.lastName}`
  }
  fullName() {
    return `${this.name} ${this.lastName}`
  }
}

class Student extends People {


  constructor(name, lastName, carrer) {
    super(name, lastName);
    this.carrer = carrer;
  }
  hi() {
    return super.hi() + ` es un estudiante de: ${this.carrer}`;
  }
  carrerDetail() {
    return `Carrera: ${this.carrer}`
  }
}

const diego = new People('Diego', 'Hernandez');
console.log(diego.hi());

const maria = new Student('Maria', 'Perez', 'industrial');
console.log(maria.hi());
console.log(maria.fullName());