const myName: string = "assami";
const myUsia: number = 22;
const kuliah: boolean = true;

let me = "assami";
let usia = 22;

// ARRAY
const nameArr: string[] = ["assami", "muzaki"];
const nameArr2: Array<string> = ["joki", "wodidi"];
const usiaArr: number[] = [1, 2, 3];
const usiaArr2: Array<number> = [4, 5, 6];

// FUNCTION PARAMETER ANNOTATION
function greet(name: string) {
  console.log(`Hello ${name}`);
}
greet("Assami");
// FUNCTION RETURN ANNOTATION
function greetings(): string {
  return "hllaw";
}

// --------------------------------------OBJECT ANNOTATION ON FUNCTION
function printCoord(pt: { x: number; y?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3 });

// --------------------------------------TYPE ALIAS
type Point = {
  x: number;
  y: number;
};

function printCoordAlias(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordAlias({ x: 100, y: 100 });

interface Point2 {
  x: number;
  y: number;
}

function printCoord2(pt: Point2) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord2({ x: 100, y: 100 });
