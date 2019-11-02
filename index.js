const translate = require('@vitalets/google-translate-api');
const argv = require('minimist')(process.argv.slice(2));
const preset = require('./preset');

const DEFAULT_LANG_CODE = 'en';

if (argv['_'].length === 0) {
    showHelp();
} else {
    const text = argv['_'].join(' ');
    const selectedPreset = preset[argv['p']] || {};
    const delimiter = getParam('d', 'delimiter');
    const capitalization = getParam('c', 'capitalization');
    const caseFirst = getParam('f', 'caseFirst');
    const prefix = getParam('b', 'prefix');
    const postfix = getParam('a', 'postfix');
    const langCode = argv['l'] || DEFAULT_LANG_CODE;

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
            default:
                break;
        }
        console.log(prefix + name + postfix);
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
    -c    Capitalization ("first", "all", "none", "preserve");
    -f    Case of first letter ("upper", "lower", "preserve");
    -l    Translate to specified language (two letters code, 'en' by default);
    -d    Delimiter;
    -p    Preset. Parameters override preset;
    -b    Prefix;
    -a    Postfix;
    
Examples:
    npm start -- послать запрос   
    npm start -- -c all -d _  Hằng số tuyệt vời của tôi 
    
Available presets:
    ${Object.entries(preset).map(p=>p[0]).join(', ')}
`);
}

function getParam(short, long) {
    const selectedPreset = preset[argv['p']] || {};
    const defaultPreset = preset['default'];
    return  argv[short]  || selectedPreset[long] || defaultPreset[long];
}
