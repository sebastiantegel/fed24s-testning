import { getPersons } from "../services/personService";

jest.mock("axios", () => {
  return {
    get: async (url: string) => {
      if (url === "") {
      }

      return new Promise((resolve) => {
        resolve({
          data: [
            { name: "Sebastian", age: 45, isMarried: true },
            { name: "Hanna", age: 45, isMarried: true },
          ],
        });
      });
    },
  };
});

describe("getPerson service tests", () => {
  test("it should get data", async () => {
    // Assign

    // Act
    const persons = await getPersons();

    // Assert
    expect(persons.length).toBe(2);
  });
});
