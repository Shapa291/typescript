export {};

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 10e3;

const message: string = "Hello World";

const numberArray: number[] = [1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "World !"];

//Tuple
const contact: [string, number] = ["Nikc", 1234];

//Any
let variable: any = 42;
//....
variable = "string";
variable = [];

//===
function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Nick");

//Never
function throwError(message: string): never {
  throw new Error(message);
}

//ALIAS
type Login = string;

const login: Login = "admin";
//const login2: Login = 2

type ID = string | number;

const id1: ID = 1234;
const id2: ID = "1234";

//null and undefined
type SomeType = string | null | undefined | void;
