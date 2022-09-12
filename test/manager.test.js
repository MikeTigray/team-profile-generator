const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Initialization", () => {
  it("should be a sub class of parent Employee", () => {
    // Arrange

    const obj = new Manager();
    // Assert
    expect(obj instanceof Employee).toEqual(true);
  });
  it("should have an office number property", () => {
    // Arrange
    const obj = new Manager();
    // Assert
    expect("officeNumber" in obj).toEqual(true);
  });

  it("should pass in all values of argument", () => {
    // Arrange
    const name = "Mike";
    const email = "miketesfay23@gmail.com";
    const id = 7;
    const officeNumber = 23;

    // Act
    const obj = new Manager(name, email, id, officeNumber);

    // Assert
    expect(obj.name).toEqual(name);
    expect(obj.email).toEqual(email);
    expect(obj.id).toEqual(id);
    expect(obj.officeNumber).toEqual(officeNumber);
  });
});
