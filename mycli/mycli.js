#!/usr/bin/env node

console.log("Hello World");
// Command: ./mycli.js rena --name="meow"
const args = process.argv.slice(2);

// dir = rena
const dir = args[0]

// named = meow       [ '', 'rena' ]
const named = args[1].split('--name=')[1];

// { dir: 'myname', named: 'rena' }
console.log({ dir, named });

console.log("Egghead");