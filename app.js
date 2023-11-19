const fs = require("fs");
const data = require ('./data')
const yargs = require("yargs");



yargs.command({
  command: "add",
  describe: "to add an item",
  handler: (x) => {
    data.addPerson(x.id, x.fname, x.lname, x.age, x.city);
  },
});
// console.log(yargs.argv)



yargs.command({
  command: "delete",
  describe: "to delete an item",
  handler: (x) => {
    data.deletePerson(x.id);
  },
});
// console.log(yargs.argv)



yargs.command({
  command: "read",
  describe: "to read data",
  builder: {
    id: {
      describe: "this is id desc in read command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data.readData(x.id);
  },
});
// console.log(yargs.argv)




yargs.command({
  command: "list",
  describe: "to list data",
  handler: () => {
    data.listData();
  },
});
yargs.parse()
