var core = require('taskjs-core');

exports.registry = core.createRegistry;
exports.queue = core.createQueue;

var tasks = [
    './lib/concat',
    './lib/load',
    //'./lib/fork',
    './lib/inspect',
    './lib/log',
    './lib/write'
];

tasks.forEach(function(task) {
    var mod = require(task),
        name;

    for (name in mod) {
        exports[name] = mod[name];
    }
});