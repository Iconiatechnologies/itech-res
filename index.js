#!/usr/bin/env node
"use strict";

var inquirer = require("inquirer");
var chalk = require("chalk");

var response = chalk.bold.green;

var profile = require("./profile.json");

var profilePrompts = {
  type: "list",
  name: "profileOptions",
  message: "What would you like to know about us?",
  choices: [...Object.keys(profile), "Exit"]
};

function main() {
  console.log("Hello, We are Itech, welcome to our profile");
  profileHandler();
}

function profileHandler() {
  inquirer.prompt(profilePrompts).then(answer => {
    if (answer.profileOptions == "Exit") {
      return;
    }
    var option = answer.profileOptions;
    console.log(response("--------------------------------------"));
    profile[`${option}`].forEach(info => {
      console.log(response("|   => " + info));
    });
    console.log(response("--------------------------------------"));
    // console.log(resume[`${option}`]);
    inquirer
      .prompt({
        type: "list",
        name: "exitBack",
        message: "Go back or Exit?",
        choices: ["Back", "Exit"]
      })
      .then(choice => {
        if (choice.exitBack == "Back") {
          profileHandler();
        } else {
          return;
        }
      });
  });
}

main();