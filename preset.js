const preset = {
    java_method: {
        capitalization: 'first',
        delimiter: '',
        caseFirst: 'lower'
    },
    java_class: {
        capitalization: 'first',
        delimiter: '',
        caseFirst: 'preserve'
    },
    java_variable: {
        capitalization: 'first',
        delimiter: '',
        caseFirst: 'lower'
    },
    java_constant: {
        capitalization: 'all',
        delimiter: '_',
        caseFirst: 'preserve'
    },
    hungarian_index: {
        capitalization: 'first',
        delimiter: '',
        caseFirst: 'preserve',
        prefix: 'ix'
    },
    hungarian_counter: {
        capitalization: 'first',
        delimiter: '',
        caseFirst: 'preserve',
        prefix: 'c'
    },


};

module.exports = preset;
