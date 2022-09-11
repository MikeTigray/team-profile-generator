const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return a new object with a 'name' property when called with the new keyword", () => {
      // Arrange
      const obj = new Employee();

      //   Assert
      expect("name" in obj).toEqual(true);
    });
    it("should return a new object with an 'id' property when called with the new keyword", () => {
      // Arrange
      const obj = new Employee();
      //   Assert
      expect("id" in obj).toEqual(true);
    });
    it("should return a new object with an 'email' property when called with the new keyword", () => {
      // Arrange
      const obj = new Employee();
      //   Assert
      expect("email" in obj).toEqual(true);
    });
    it("object's 'name', 'email', and 'id' properties should have value when called", () => {
      // Arrange
      const name = "Mike";
      const email = "miketesfay23@gmail.com";
      const id = 2;
      const obj = new Employee(name, email, id);
      //   Assert
      expect(obj.name).toEqual(name);
    });

    it("object's 'email' property should have email value when called", () => {
      // Arrange
      const name = "Mike";
      const email = "miketesfay23@gmail.com";
      const id = 2;
      const obj = new Employee(name, email, id);

      //   Assert
      expect(obj.email).toEqual(email);
    });
    it("object's 'id' property must be a number", () => {
      // Arrange
      const name = "Mike";
      const email = "miketesfay23@gmail.com";
      const id = 2;
      const obj = new Employee(name, email, id);
      // Assert
      expect(isNaN(obj.id)).toEqual(false);
    });
  });

  // Methods in Prototype of Employee class

  describe("Prototype methods", () => {
    describe("getName method", () => {
      it("getName method() should return name of employee", () => {
        // Arrange
        const name = "Mike";
        const email = "miketesfay23@gmail.com";
        const id = 2;
        // Act
        const obj = new Employee(name, email, id);
        const result = obj.getName();
        // Assert
        expect(result).toEqual(obj.name);
      });
    });

    describe("getId method", () => {
      it("getId method() should return id of employee", () => {
        // Arrange
        const name = "Mike";
        const email = "miketesfay23@gmail.com";
        const id = 2;
        // Act
        const obj = new Employee(name, email, id);
        const result = obj.getId();
        // Assert
        expect(result).toEqual(obj.id);
      });

      describe("getEmail method", () => {
        it("getEmail method() should return email of employee", () => {
          // Arrange
          const name = "Mike";
          const email = "miketesfay23@gmail.com";
          const id = 2;
          // Act
          const obj = new Employee(name, email, id);
          const result = obj.getEmail();
          // Assert
          expect(result).toEqual(obj.email);
        });

        describe("getRole method", () => {
          it("getRole method() should return 'employee' as string", () => {
            // Arrange

            const obj = new Employee();
            // Act
            const result = obj.getRole();
            // Assert
            expect(result).toEqual("Employee");
          });
        });
      });
    });
  });
});
