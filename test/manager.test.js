const Manager = require("../lib/manager");

describe("Initialization", () => {
  it("should be a sub class of parent Employee", () => {
    // Arrange

    const obj = new Manager();
    // Assert
    expect(obj instanceof Manager).toEqual(true);
  });
  it("should have an office number property", () => {
    // Arrange
    const obj = new Manager();
    // Assert
    expect("officeNumber" in obj).toEqual(true);
  });

  it("office number must be a number value", () => {
    // Arrange
    const name = "Mike";
    const email = "miketesfay23@gmail.com";
    const id = 7;
    const officeNumber = 23;

    // Act
    const obj = new Manager(name, email, id, officeNumber);

    // Assert
    expect(isNaN(obj.officeNumber)).toEqual(false);
  });

  // Exception test

  it("should throw an error if office number is not a number value", () => {
    // Arrange
    const name = "Mike";
    const email = "miketesfay23@gmail.com";
    const id = "not a number";
    const officeNumber = 23;
    const err = new Error("Id and office number must be a number value");
    // Act
    const cb = () => new Manager(name, email, id, officeNumber);
    // Assert
    expect(cb).toEqual(err);
  });
});
