const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js'); 
const { demand } = require('yargs');

// Customize yargs version
yargs.version('1.1.0')

// Create add Command
yargs.command({
    command:'add',
    describe:'Add a new Note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            tyep:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

// Create Remove Command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.delNote(argv.title)
    }
})

// Create a list Command
yargs.command({
    command:'List',
    describe:'List your notes',
    handler(){
        notes.listNotes()
    }
})

// Create read Command
yargs.command({
    command:'read',
    describe:'Read a Note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()