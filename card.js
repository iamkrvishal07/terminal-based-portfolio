// card.js
const chalk = require("chalk");
const boxen = require("boxen");

const cardData = {
  name: chalk.bold("             Hi, I'm Vishal Kumar\n              Ranchi, Jharkhand"),
  github: chalk.gray("https://github.com/") + chalk.green("iamkrvishal07"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("iamkrvishal07"),
  npx: chalk.red("npx") + " " + chalk.white("iamkrvishal07"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelCard: chalk.white.bold("          Card:")
};

exports.Card = boxen(
  [
    `${cardData.name}`,
    ``,
    `${cardData.labelGitHub}  ${cardData.github}`,
    `${cardData.labelLinkedIn}  ${cardData.linkedin}`,
    ``,
    `${cardData.labelCard}  ${cardData.npx}`,
    ``
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "round",
    borderColor: "green"
  }
);
