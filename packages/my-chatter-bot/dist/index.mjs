import { thinking } from 'chatter-bot-brains';

async function ask(question) {
    const tone = new RegExp('[!?！？]');
    await thinking(); //思考一秒
    return question.replace(tone, '').replace('吗', "");
}

export { ask };
