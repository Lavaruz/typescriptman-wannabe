function printing(params: number | string) {
  if (typeof params === "string") {
    console.log(params.toUpperCase());
  }
  console.log(params);
}

printing("assami");
printing(30);
// printing([1, 2, 3]);

// --------------------------------------NARROWING ON FUNCTION OF ARRAY AND STRING
function welcomePeople(x: Array<string> | string) {
  if (Array.isArray(x)) {
    console.log("welcome travelers" + x.join(", "));
  } else {
    console.log(`welcome lone traveler ${x.toUpperCase()}`);
  }
}

// -------------------------------------LITERAL TYPE
let x: "hello" = "hello";
// OK
x = "hello";
// ...
x = "howdy";

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");

let a = 10;
console.log(a!);
