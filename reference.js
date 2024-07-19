
let number = 4;

const edit = (num, value) => {
  num = value;
  console.log(`El valor externo es: ${num}`);
};

edit(number, 10);
console.log(`El valor externo es: ${number}`);

class A {
  constructor(number) {
    this.number = number;
  }
}

let a = new A(4);
console.log(a);
const editObject = (obj, value) => {
  obj.number = value;
  console.log(`El valor interno es: ${obj.number}`);
};
editObject(a, 10);
console.log(a);
