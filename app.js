// Node API
const fs = require('fs');

// Imports
const generatePage = require('./src/page-template.js')

const profileDataArgs = process.argv.slice(2, process.argv.length);

const name = profileDataArgs[0]
const github = profileDataArgs[1]

fs.writeFile('./index.html', generatePage(name, github), e => {
    if (e) throw e;

    console.log('Portfolio complete! Checkout index.html to see the output!');
});

module.exports = generatePage;