import { thinking } from "chatter-bot-brains"
export async function ask(question: string): Promise<string> {
  const tone = new RegExp('[!?！？]')
  await thinking();//思考一秒
  return question.replace(tone, '').replace('吗', "")
}