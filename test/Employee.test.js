const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Test Employee is an object", () => {
    const e = new Employee();
    expect(typeof e).toBe("object");
  });

  it("Set name with constructor arguments", () => {
    const name = "John";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  //
  it("Test undefined result", () => {
    const e = new Employee();
    expect(e.email).toBe(undefined);
  });

  it("Testing null", () => {
    const email = null;
    const e = new Employee(null, null, email);
    expect(e.email).toBe(null);
  });

  //

  it("Set id with constructor argument", () => {
    const testValue = 1;
    const e = new Employee("John", testValue);
    expect(e.id).toBe(testValue);
  });

  it("Set email with constructor argument", () => {
    const testValue = "test@mail.com";
    const e = new Employee("John", 1, testValue);
    expect(e.email).toBe(testValue);
  });

  // Employee constructors = Name, Id, Email
  // Engineer constructors = Name, Id, Email, Github
  // Intern constructors = Name, Id, Email, School
  // Manager constructors = Name, Id, Email, Phone Number

  // 1st constructor = Name
  describe("getName", () => {
    it("Get name with getName()", () => {
      const testValue = "John";
      const e = new Employee(testValue);
      expect(e.getName()).toBe(testValue);
    });
  });

  // 2nd constructor = Id
  describe("getId", () => {
    it("Get id with getId()", () => {
      const testValue = 1;
      const e = new Employee("John", testValue);
      expect(e.getId()).toBe(testValue);
    });
  });

  // 3rd constructor = Email
  describe("getEmail", () => {
    it("Get email with getEmail()", () => {
      const testValue = "test@mail.com";
      const e = new Employee("John", 1, testValue);
      expect(e.getEmail()).toBe(testValue);
    });
  });

  
  describe("getRole", () => {
    it('getRole() should return "Employee"', () => {
      const testValue = "Employee";
      const e = new Employee("John", 1, "test@mail.com");
      expect(e.getRole()).toBe(testValue);
    });
  });
});
