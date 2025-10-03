import { basename, dirname, extname, parse, join } from "path";

// BASE NAME
console.log(basename(__filename));

// DIRECTORY NAME
console.log(dirname(__filename));

// FILE EXTENSION
console.log(extname(__filename));

// CREATE PATH OBJECT
console.log(parse(__filename));

// CREATE FILE JOINT
console.log(join(__dirname, "/test", "test.txt"));
