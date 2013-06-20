require.config({
    baseUrl: 'src',
    paths: {
        'jquery': '../components/jquery/jquery',
        'underscore': '../components/underscore/underscore'
    },
    shim: {
        underscore: {exports: '_'}
    }
});


require(['jquery', 'underscore', 'calc'], function($, _, calc) {
    var sum = calc.add();
});