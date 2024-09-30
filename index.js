const yargs = require("yargs");
const { deleteNode, readNotes } = require("./notes.controller");

yargs.command({
  command: "delete",
  describe: "Delete note from file",
  builder: {
    id: {
      type: "number",
      describe: "Note id",
      demandOption: true,
    },
  },
  async handler({ id }) {
    await deleteNode(id);
  },
});

yargs.command({
  command: "read",
  describe: "Read notes",
  async handler() {
    await readNotes();
  },
});

yargs.parse();
