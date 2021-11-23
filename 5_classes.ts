export {};

class TypeScript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}

class Auto {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string) {
    this.voice = voice;
  }
}

const cat = new Cat();

cat.setVoice("Myaaaaaaaooooo!");
console.log(cat.color);

//=========== abstract class and methods

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Comp on render");
  }

  info(): string {
    return "this is info";
  }
}
