//Add a note
const myNotes = [];

addNote(myNotes, "This is my notes", 1);
addNote(myNotes, "second note", 2);
addNote(myNotes, "remove", 3);

//Get a note
let note = getNoteById(myNotes, 1);
console.log(note);

//Get all notes
let allNotes = getNotes(myNotes);
console.log(allNotes);

//Log out notes
for (i = 0; i < myNotes.length; i++) {
  let noteFormatted = logOutNoteFormatted(myNotes[i]);
  console.log(noteFormatted);
}

//Unique feature
/*I will create a function , witch will check all notes, 
if Note contains a specific word "remove",this function will delate this note. */

const content = "remove";
let myUpdatedNotes = deleteNoteByContent(myNotes, content);
console.log(myUpdatedNotes);

function addNote(notes, myContent, noteId) {
  notes.push({ content: myContent, id: noteId });
}

function getNoteById(notes, noteId) {
  let result = "error";

  for (i = 0; i < notes.length; i++) {
    if (notes[i].id === noteId) {
      result = notes[i];
    }
  }

  return result;
}

function getNotes(notes) {
  return notes;
}

function logOutNoteFormatted(note) {
  return ("The note with id: " + note.id + " ," + " has the following note text:" + "'" + note.content + "'");
}

function deleteNoteByContent(notes, content) {
  const filteredNotes = notes.filter(note => note.content !== content);

  return filteredNotes;
}
