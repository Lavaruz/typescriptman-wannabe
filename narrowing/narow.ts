function padLeft(padding: string | number, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

// BOLLEAN OPERATION
console.log(!!"brodi");

function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

printAll("test");

// ASSIGNMENT
let x = Math.random() < 0.5 ? 10 : "hello world!";
x = 1;

console.log(x);
x = "goodbye!";

console.log(x);

// DISCRIMINATED UNIONS

// INSTEAD OF THIS
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}
// DO THIS
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape2 = Circle | Square;

function getArea(shape: Shape2) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

function getArea2(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.sideLength ** 2;
  }
}
