import { type } from "os";

let age: number;

age = 33;

let userName: string = "fdfd";

let hobbies: string[];

hobbies = ["sports", "Cooking"];

type Person= {
  name: string;
  age: number;
};

let person:Person = {
  name: "Mas",
  age: 36,
};
// person = {
//     isWorking:true
// }

let people:Person[];

//type inference

let course = "type Script basicse";

// course = 123456;
let coursee: string | number  = "type Script basicse";

coursee = 123456;


//Functions and typse 

function add(a:number,b:number){
    return a+b
}
function print(value:any){
    console.log(value);
}

// generics


function insertAtBginning<T>(arr:T[],value:T){
    const newArr = [value, ...arr]
    return newArr
}

const demoArr = [1,2,3]
const updatedArr = insertAtBginning(demoArr, -1 )
const stringArr = insertAtBginning(['a','b','c'], 'd' )

// updatedArr[0].split('')
stringArr[0].split('')




