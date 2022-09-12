const Employee = require("../lib/employee");
const Intern = require("../lib/intern");
describe("Initialization", () => {
  it("should be a sub class of parent Employee", () => {
    // Arrange

    const obj = new Intern();
    // Assert
    expect(obj instanceof Employee).toEqual(true);
  });
  it("should have a school property", () => {
    // Arrange
    const obj = new Intern();
    // Assert
    expect("school" in obj).toEqual(true);
  });

  it("should pass in all values of argument", () => {
    // Arrange
    const name = "Mike";
    const email = "miketesfay23@gmail.com";
    const id = 7;
    const school = "Local";

    // Act
    const obj = new Intern(name, email, id, school);

    // Assert
    expect(obj.name).toEqual(name);
    expect(obj.email).toEqual(email);
    expect(obj.id).toEqual(id);
    expect(obj.school).toEqual(school);
  });
});
