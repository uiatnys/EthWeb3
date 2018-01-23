"use strict";

var Web3 = require('./node_modules/web3/lib/web3');
// app.js
module.exports = app => {
    app.beforeStart(async () => {
        console.log(app.config.env);
        // dont override global variable
        if (typeof web3 !== 'undefined') {
            app.web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            app.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
    });
};