exports.concat = function(options, data, callback) {
    var result = {
        status: 404,
        uri: '',
        headers: {'X-Concat': []},
        content: ''
    };

    data.forEach(function(item) {
        if (item.status !== 200) {
            return;
        }

        result.status = 200;
        result.headers['X-Concat'].push(item.uri);
        result.content += item.content;
    });

    result.headers['X-Concat'] = result.headers['X-Concat'].join(' ');

    callback(null, [result]);
};