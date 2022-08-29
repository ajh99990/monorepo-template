'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chatterBotBrains = require('chatter-bot-brains');

async function ask(question) {
    const tone = new RegExp('[!?！？]');
    await chatterBotBrains.thinking(); //思考一秒
    return question.replace(tone, '').replace('吗', "");
}

exports.ask = ask;
