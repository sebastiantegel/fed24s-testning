import { add } from "../main";

describe("My awesome tests", () => {
  test("is should add correctly", () => {
    // Assign
    const x = 10;
    const y = 20;
    let sum = 0;

    // Act
    sum = add(x, y);

    // Assert
    expect(sum).toBe(30);
  });
});
