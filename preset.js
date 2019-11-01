const preset = {
    java_method: {
        capitalization: 'first',
        delimiter: '',
        caseFirst: 'lower'
    },
    js_class: {
        capitalization: 'first',
        delimiter: '',
        caseFirst: 'preserve'
    },
    js_variable: {
        capitalization: 'first',
        delimiter: '',
        caseFirst: 'lower'
    },
    js_constant: {
        capitalization: 'all',
        delimiter: '_',
        caseFirst: 'preserve'
    },
    js_method: {
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
    c_variable: {
        capitalization: 'none',
        delimiter: '_',
        caseFirst: 'preserve'
    },
    c_reserved: {
        capitalization: 'none',
        delimiter: '_',
        caseFirst: 'preserve',
        prefix: '__'
    },
    c_constant: {
        capitalization: 'all',
        delimiter: '_',
        caseFirst: 'preserve'
    },
};

module.exports = preset;
