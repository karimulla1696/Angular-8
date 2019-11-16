export {}
let message = 'welcome back';
console.log(message);

let x = 10;
const y = 30;

let sum;
const title = 'my self karimulla';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'kareem';

// template string
let sentence: string = `My name ${name}
I am a beginner in TypeScript `;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let persons1: [string, number] = ['kareem', 23];

enum Color {Red, Green, Blue};

let c: Color = Color.Blue;
console.log(c);

// variable deceleration
let randomValue: any = 10;
randomValue = true;
randomValue = 'kareem';

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === 'object' && "name" in obj
}

if(hasName(myVariable)) {
    console.log(myVariable.name);
}
(myVariable as string).toUpperCase();

// variable types
let a;
a = 10;
a = true;

let b = 20;

let multipleType: number | boolean;
multipleType = 20;
multipleType = true;

let anyTime: any;
anyTime = 20;
anyTime = true;


// functions
function add(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
        else
            return num1
}

add(5, 10);
add(5);

// interfaces

interface Person {
    firstName: string;
    lastName?: string;
}
function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'shaik'
    // lastName: 'karimulla'
};

fullName(p);

// classes
class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good morning ${this.employeeName}`)
    }
}

let emp1 = new Employee('karimulla');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks `)
    }
}

let m1 = new Manager('manjoor');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);