const Engineer = require("../lib/engineer");

describe("Initialization", () => {
  it("should be a sub class of parent Employee", () => {
    // Arrange
    const obj = new Engineer();
    // Assert
    expect(obj instanceof Employee).toEqual(true);
  });
  it("should have a github property", () => {
    // Arrange
    const github = "MikeTigray";
    const obj = new Engineer(github);
    // Assert
    expect(obj.gitHub).toEqual(github);
  });

  // Prototype methods

  describe("getRole method()", () => {
    it("getRole method should return 'Engineer' string", () => {
      // Arrange
      const obj = new Engineer();

      // Assert
      expect(obj.getRole()).toEqual("Engineer");
    });

    it("getGithub method should return github username", () => {
      // Arrange
      let gitHub;
      const obj = new Engineer(gitHub);
      // Act

      // Assert
      expect(obj.getGithub()).toEqual(obj.gitHub);
    });
  });
});
