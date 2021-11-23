export {};

function sumOfTwo(a: number, b: number): number {
  return a + b;
}

function toUperCase(str: string): string {
  return str.trim().toUpperCase();
}

//Перегрузка функции
interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}
interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    return { x: a, y: undefined, default: "hello world" };
  }
  if (a && b) {
    return { x: a, y: b };
  }
}

console.log("Empty", position());

console.log("One", position(42));

console.log("Two", position(10, 15));
