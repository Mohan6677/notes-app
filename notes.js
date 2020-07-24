const fs = require('fs')
const getNotes = ()=> {
    return "Your Notes ...";
}; 
const addNote = (title,body)=> {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title)

    if (duplicateNotes === 0 ) {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
    }
    else {
        console.log("title is taken")
    }
}
const delNote = (title)=> {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title !== title)
    if(notes.length>notesToKeep.length) {
        console.log('Note Removed!')
        saveNotes(notesToKeep)
    }
    else {
        console.log('No note Found!')
    }
}
const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)

    if(note) {
        console.log(note.title)
        console.log(note.body)
    }
    else
    {
        console.log('note not found!')
    }
}
const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON =dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e) {
        return []
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    delNote: delNote,
    listNotes:listNotes,
    readNote: readNote
}