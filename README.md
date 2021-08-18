# 10 Object-Oriented Programming: Team Profile Generator

## My Project 

The task was to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

Testing was used to make code maintainable, I wrote a unit test for every part of the code to ensure that it passes each test. 

Because this application is not deployed, a link is provided to a walkthrough video that demonstrates its functionality and all of the tests passing. 

[Walkthrough Video](https://drive.google.com/file/d/1Ol2HN7cZ72-iLyj6zXldxW-NKQlEaD7P/view)

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input 
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address 
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab 
WHEN I start the application 
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number 
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option 
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu 
WHEN I select the intern option 
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team 
THEN I exit the application, and the HTML is generated 
```


## Getting Started

The application uses [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application is invoked by using the following command:

```bash
node index.js
```

The application includes `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) all pass. 

The first class is an `Employee` parent class with the following properties and methods: 

* `name` 

* `id` 

* `email` 

* `getName()` 

* `getId()` 

* `getEmail()` 

* `getRole()`&mdash;returns `'Employee'` 

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber` 

* `getRole()`&mdash;overridden to return `'Manager'` 

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username 

* `getGithub()` 

* `getRole()`&mdash;overridden to return `'Engineer'` 

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school` 

* `getSchool()` 

* `getRole()`&mdash;overridden to return `'Intern'` 

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format. 

## Grading Requirements

### Deliverables: 15%

* A sample HTML file generated using the application must be submitted.

* Your GitHub repository containing your application code. 


### Walkthrough Video: 32%

* A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file. 

* The walkthrough video must show all four tests passing from the command line. 

* The walkthrough video must demonstrate how a user would invoke the application from the command line. 

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application. 
 
* The walkthrough video must demonstrate a generated HTML file that matches the user input. 


### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer). 

	* Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests. 

  * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes. 

### Repository Quality: 13%

* Repository has a unique name. 

* Repository follows best practices for file structure and naming conventions. 

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc. 

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality readme with description and a link to a walkthrough video. 

## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests. 

* A sample HTML file generated using your application. 

* The URL of the GitHub repository, with a unique name and a readme describing the project. 

## Bonus
* Add button to remove members 
* Store information to build team rather than replace 
