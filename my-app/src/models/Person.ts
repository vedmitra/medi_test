import IPet from "./Pet";

export interface IPerson {
  name: String;
  gender: String;
  age: Number;
  pets: IPet[];
}

export class Person implements IPerson {
  name = "";
  gender = "";
  age = 0;
  pets = [];
}
