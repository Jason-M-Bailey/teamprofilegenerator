const Intern = require("../lib/Intern");

test("Set school with constructor", () => {
  const testValue = "UNCC";
  const e = new Intern("John", 1, "test@mail.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() returns "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("John", 1, "test@mail.com", "UNCC");
  expect(e.getRole()).toBe(testValue);
});

test("Get school with getSchool()", () => {
  const testValue = "UNCC";
  const e = new Intern("John", 1, "test@mail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
