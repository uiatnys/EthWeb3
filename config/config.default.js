'use strict';

module.exports = appInfo => {
    const config = exports = {};

// use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1516677531391_7474';

// add your config here
    config.middleware = ['gzip'];

    gzip: {
        threshold: 1024 // 小于 1k 的响应体不压缩
    };

    bodyParser: {
        enable: false
    };

    return config;
};

