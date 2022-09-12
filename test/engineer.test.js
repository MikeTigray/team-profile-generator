const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");
describe("Initialization", () => {
  it("should be a sub class of parent Employee", () => {
    // Arrange
    const obj = new Engineer();
    // Assert
    expect(obj instanceof Employee).toEqual(true);
  });
  it("should have a github property", () => {
    // Arrange
    const name = "Mike";
    const email = "miketesfay23@gmail.com";
    const id = 5;
    const github = "MikeTigray";
    // Act
    const obj = new Engineer(name, email, id, github);
    // Assert
    expect(obj.gitHub).toEqual(github);
  });

  // Prototype methods

  describe("Prototype methods", () => {
    it("getRole method should return 'Engineer' string", () => {
      // Arrange
      const obj = new Engineer();

      // Assert
      expect(obj.getRole()).toEqual("Engineer");
    });

    it("getGithub method should return github username", () => {
      // Arrange
      const name = "Mike";
      const email = "miketesfay23@gmail.com";
      const id = 5;
      const github = "MikeTigray";
      // Act
      const obj = new Engineer(name, email, id, github);
      // Assert
      expect(obj.getGithub()).toEqual(obj.gitHub);
    });
  });
});
