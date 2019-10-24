const translate = require('@vitalets/google-translate-api');
const argv = require('minimist')(process.argv.slice(2));

const DEFAULT_DELIMITER = '';
const DEFAULT_CAPITALIZATION = 'first';

if (argv['_'].length === 0) {
    showHelp();
} else {
    const text = argv['_'].join(' ');
    const delimiter = argv['d'] ? argv['d'] : DEFAULT_DELIMITER;
    const capitalization = argv['c'] ? argv['c'].toLowerCase() : DEFAULT_CAPITALIZATION;

    translate(text, {to: 'en'}).then(res => {
        const result = res.text;
        const words = result.split(' ');
        const name = words.map(word => {
            switch (capitalization) {
                case "first":
                    return word[0].toUpperCase() + word.slice(1).toLowerCase();
                case "none":
                    return word.toLowerCase();
                case "all":
                    return word.toUpperCase();
                case "preserve":
                default:
                    return word;
            }
        }).join(delimiter);
        console.log(name);
    }).catch(err => {
        console.error(err);
    });
}

function showHelp() {
    console.log(
`Variable names generator.
Usage:
    npm install 
    npm start -- [parameters] <short variable description>

Where "parameters" can be:
    -c    Capitalization ("first", "all", "none", "preserve")
    -d    Delimiter
    
Examples:
    npm start -- послать запрос   
    npm start -- -c all -d _  Моя потрясяющая константа 
`);
}
