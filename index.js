const clipboardy = require("clipboardy");

clipboardy.writeSync(String(Date.now()));

console.log(clipboardy.readSync());
