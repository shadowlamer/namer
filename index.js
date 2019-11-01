const translate = require('@vitalets/google-translate-api');
const argv = require('minimist')(process.argv.slice(2));

const DEFAULT_DELIMITER = '';
const DEFAULT_CAPITALIZATION = 'preserve';
const DEFAULT_CASE_FIRST = 'preserve';
const DEFAULT_LANG_CODE = 'en';

if (argv['_'].length === 0) {
    showHelp();
} else {
    const text = argv['_'].join(' ');
    const delimiter = argv['d'] ? argv['d'] : DEFAULT_DELIMITER;
    const capitalization = argv['c'] ? argv['c'].toLowerCase() : DEFAULT_CAPITALIZATION;
    const caseFirst = argv['f'] ? argv['f'].toLowerCase() : DEFAULT_CASE_FIRST;
    const langCode = argv['l'] ? argv['l'].toLowerCase() : DEFAULT_LANG_CODE;

    translate(text, {to: langCode}).then(res => {
        const result = res.text;
        const words = result.split(' ');
        let name = words.map(word => {
            switch (capitalization) {
                case 'first':
                    return word[0].toUpperCase() + word.slice(1).toLowerCase();
                case 'none':
                    return word.toLowerCase();
                case 'all':
                    return word.toUpperCase();
                case DEFAULT_CAPITALIZATION:
                default:
                    return word;
            }
        }).join(delimiter);
        switch (caseFirst) {
            case 'upper':
                name = name[0].toUpperCase() + name.slice(1);
                break;
            case 'lower':
                name = name[0].toLowerCase() + name.slice(1);
                break;
            case DEFAULT_CASE_FIRST:
            default:
                break;
        }
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
