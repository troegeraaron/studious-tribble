/*
This is a practice javascript file. The point is to put random stuff in here and it helps
to practice and keep track of notes. Maybe I could make a note taking app...
*/

note_box = document.getElementById('notes')
note_box.focus()
/* Press ctrl-enter to add note to notes list */
note_box.addEventListener('keyup', (event) => {
    if (event.ctrlKey && event.key == 'Enter') {
        addNote()
    }
})
document.getElementById('addNoteButton').addEventListener('click', addNote);
let notes = []
let note_num = 0

/* Adds the typed note to the staging area */
function addNote() {
    let textBox = note_box
    let new_note = textBox.value;
    let newDive = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = new_note;
    p.id = 'note' + String(note_num);
    note_num++
    let new_button = document.createElement('button')
    new_button.innerHTML = 'Confirm'
    new_button.value = p.id
    new_button.id = 'confirm_note';
    new_button.addEventListener('click', () => {
        let text = document.getElementById(new_button.value).textContent
        notes.push(text)
        let new_p = document.createElement('p')
        new_p.textContent = text
        document.getElementById('confirmed_notes').appendChild(new_p)
        newDive.parentNode.removeChild(newDive)
    })
    p.appendChild(new_button)
    newDive.appendChild(p)
    document.getElementById('left-section').appendChild(newDive)
    textBox.value = '';
    textBox.focus();    
}
