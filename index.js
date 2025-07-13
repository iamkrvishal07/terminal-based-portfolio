#!/usr/bin/env node
"use strict";

const inquirer = require("inquirer");
const chalk = require("chalk");
const data = require("./data.json");
const { Card } = require("./card");

const response = chalk.white;

const resumeOptions = {
  type: "list",
  name: "resumeOptions",
  message: "What do you want to explore?",
  choices: [...Object.keys(data), "Exit"]
};

function showResume() {
  console.log(Card); 
  handleResume();
}

function handleResume() {
  inquirer.prompt(resumeOptions).then(answer => {
    if (answer.resumeOptions === "Exit") {
      console.log(chalk.green("Thanks for visiting!"));
      return;
    }

    const options = data[answer.resumeOptions];
    console.log(response("\n-----------------------------\n"));
    options.forEach(info => {
      console.log(response("🔹 " + info));
    });
    console.log(response("\n-----------------------------\n"));

    inquirer.prompt({
      type: "list",
      name: "nextStep",
      message: "Go back or exit?",
      choices: ["Back", "Exit"]
    }).then(choice => {
      if (choice.nextStep === "Back") {
        handleResume();
      } else {
        console.log(chalk.green("Thanks for visiting!"));
      }
    });
  });
}

showResume();
