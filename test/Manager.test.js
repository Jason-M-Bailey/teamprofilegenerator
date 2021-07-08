const Manager = require("../lib/Manager");

test("Set office number with constructor argument", () => {
  const testValue = 1;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() returns "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("John", 1, "test@mail.com", 1);
  expect(e.getRole()).toBe(testValue);
});

test("Get office number with getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
