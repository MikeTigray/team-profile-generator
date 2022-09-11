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
    const officeNumber = 23;
    const obj = new Manager(officeNumber);

    // Assert
    expect(isNaN(obj.officeNumber)).toEqual(false);
  });
});
