/*
This is a practice javascript file. The point is to put random stuff in here and it helps
to practice and keep track of notes. Maybe I could make a note taking app...
*/

document.getElementById('addNoteButton').addEventListener('click', addNote);
notes = []
function addNote() {
    let textBox = document.getElementById('notes')
    let new_note = textBox.value;
    let newDive = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = new_note;
    p.id = 'note' + String(notes.length);
    notes.push(p.textContent)
    let new_button = document.createElement('button')
    new_button.innerHTML = 'Confirm'
    new_button.value = p.id
    new_button.id = 'confirm_note';
    new_button.addEventListener('click', () => {
        let text = document.getElementById(new_button.value).textContent
        databaseAdd(text)
    })
    newDive.appendChild(p)
    newDive.appendChild(new_button)
    document.body.appendChild(newDive)
    textBox.value = '';
    textBox.focus();
    
}
function databaseAdd(text) {
    let new_div = document.createElement('div')
    text += ' CONFIRMED'
    new_div.append(text)
    document.body.appendChild(new_div)
}