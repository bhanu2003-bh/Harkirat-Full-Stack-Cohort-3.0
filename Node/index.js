const path = require('path')

console.log(__dirname);


/*


{
  "name": "node",   // Project Name
  "version": "1.0.0",  // Project Version
  "main": "index.js",   // Main Script
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"    // All Dev Scripts
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {    // External Libraries which are added
    "express": "^5.1.0",    // "^Major.Minor.Patch"
    "path": "^0.12.7"
  }
}

Major  - This is the breaking changes
Minor - New Feature is Added
Patch - This Change is due to some bug get fixed
^ means that it will automatically reshuffle it to new version
*/