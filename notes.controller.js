const fs = require("node:fs/promises");
const path = require("path");
const notesPath = path.join(__dirname, "db.json");
async function deleteNode(id) {
  const notes = await getNotes();
  const newNotes = notes.filter((note) => Number(note.id) !== id);
  fs.writeFile("./db.json", JSON.stringify(newNotes));
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, { encoding: "utf-8" });
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

async function readNotes() {
  const notes = await getNotes();
  notes.forEach((element) => {
    return console.log(element.id, element.title);
  });
}

module.exports = { deleteNode, readNotes };
