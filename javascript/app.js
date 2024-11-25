/*
This is a practice javascript file. The point is to put random stuff in here and it helps
to practice and keep track of notes. Maybe I could make a not taking app...
*/

document.getElementById('addNoteButton').addEventListener('click', addNote);

function addNote() {
    let textBox = document.getElementById('notes')
    let new_note = textBox.value;
    let newDive = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = new_note;
    newDive.appendChild(p)
    document.body.appendChild(newDive)
    textBox.value = '';
    textBox.focus();
    
}