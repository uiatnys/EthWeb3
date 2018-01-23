"use strict";

const Controller = require('egg').Controller;

class EthControler extends Controller{

    async getCoinBase(){
        this.ctx.body = this.app.web3.eth.coinbase;
    }

    async getAccounts(){
        this.ctx.body = this.app.web3.eth.accounts;
    }
}

module.exports = EthControler;