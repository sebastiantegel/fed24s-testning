import { Person } from "../../models/Person";

const testData: Person[] = [
  { name: "Hanna", age: 45, isMarried: true },
  { name: "Astrid", age: 15, isMarried: false },
  { name: "Alvar", age: 15, isMarried: false },
];

export const getPersons = async (): Promise<Person[]> => {
  return new Promise((resolve) => {
    resolve(testData);
  });
};
