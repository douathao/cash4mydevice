exports.config = {
//    Do not start a Selenium Standalone sever - only run this using chrome.
    chromeOnly: true,
    chromeDriver: './chromedriver',
//    The address of a running selenium server.
//    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['*.spec.js'],

    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    // protractor conf.js --suite login
//    suites: {
//        login: 'pickPhone.spec.js',
//        search: ['*spec.js', '*spec.js']
//    },
    // default is 2 sec
    allScriptsTimeout: 20000,
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
