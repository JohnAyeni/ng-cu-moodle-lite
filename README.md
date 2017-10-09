# CU Moodle Lite Front-End (Angular)
A lite version of Covenant University's E-Learning Platform (Moodle)

## Project Requirements
* NodeJS (Server Side Javascript) (Download [here](https://nodejs.org/en/download/))
* Node Package Manager (it comes with NodeJs)
* Angular CLI (Command Line Interface)
* Your preferred IDE or Text Editor

## Setting Up your Development Environment
* Install NodeJS
* Open your `cmd` (Command Prompt) to install Angular CLI, type this command `npm install -g @angular/cli`

## Setting Up the Project on Your PC
1. First, fork this repository to your account.
2. Clone your fork of this repository using
`git clone https://github.com/<your_username>/ng-cu-moodle-lite.git` on your Command Prompt.
3. `cd` into the folder like `cd ng-cu-moodle-lite`
![my cmd ](https://lh6.googleusercontent.com/nAB8BdMrWs1EHuXYZ8oEjHMhnpRG9DmtOS3uuoJ0HFPOuW2wStII4wwpTiSxWN5oBX6F4oxGvJEzn6Y=w1366-h647).
4. Run `npm install` to install the project's dependencies.
5. At this point you're all ready to start working.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Contributing to this Project
Create a new branch, name it a meaningful name like the name of a feature you are working on like `git branch comment` and switch to it. (make sure you are on master before doing this).
   ```
   git branch <branch_name>
   git checkout <branch_name>
   ```
   `<branch_name>` can be replaced by your preferred name for the branch.
   The above to commands are equivalent to the following
   ```
   git checkout -b <branch_name>
   ```
   Please read more on contributing [here](CONTRIBUTING.md).

## Change Log
To see this project's update check [here](CHANGELOG.md).

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
