const Engineer = require("../lib/Engineer");

test("Set GitHub username with constructor", () => {
  const testValue = "GitHubAccount";
  const e = new Engineer("John", 1, "test@mail.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() returns "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("John", 1, "test@mail.com", "GitHubAccount");
  expect(e.getRole()).toBe(testValue);
});

test("Get GitHub username with getGithub()", () => {
  const testValue = "GitHubAccount";
  const e = new Engineer("John", 1, "test@mail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
