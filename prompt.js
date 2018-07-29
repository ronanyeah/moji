const inquirer = require("inquirer");

//inquirer.registerPrompt("command", require("inquirer-command-prompt"));

return inquirer
  .prompt([
    {
      //type: "command",
      name: "cmd",
      message: ">",
      validate: val => {
        return val
          ? true
          : "I you don't know the available commands, type help for help";
      },
      // optional
      autoCompletion: ["ls", "echo", "find", "cat", "help"],
      context: 0,
      short: false
    }
  ])
  .then(answers => {
    console.log(answers);
    return Promise.resolve(answers.cmd);
  })
  .catch(err => {
    console.error(err.stack);
  });
