require.config({
    baseUrl: 'spec',
    paths: {
        'jquery': '../components/jquery/jquery',
        'jasmine': '../components/jasmine/lib/jasmine-core/jasmine',
        'jasmine-html': '../components/jasmine/lib/jasmine-core/jasmine-html',
        'app': '../src'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});


require(['jquery', 'jasmine-html'], function($, j) {

    var jasmineEnv = j.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new j.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    specs.push('calcSpec');



    $(function() {
        require(specs, function(spec) {
            jasmineEnv.execute();
        });
    });

});