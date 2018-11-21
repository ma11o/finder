#!/usr/bin/env node

const list = require("../lib/list");
const keypress = require('keypress');
const ansiEscapes = require('ansi-escapes');

process.stdout.write(ansiEscapes.clearScreen);

var item = list.list();
var posX = item.length;

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {

    if (key.name == 'up') {
        process.stdout.write(ansiEscapes.cursorUp(1));
        posX--;
    } else if (key.name == 'down') {
        process.stdout.write(ansiEscapes.cursorDown(1));
        posX++;
    } else if (key.name == 'return') {

        if (item[posX].name == '..') {
            process.chdir('../');
        } else {
            process.chdir('./' + item[posX].name);
        }

        process.stdout.write(ansiEscapes.clearScreen);
        item = list.list(process.cwd());
        posX = item.length;

    } else if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();