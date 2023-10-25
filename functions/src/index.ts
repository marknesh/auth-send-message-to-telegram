import * as functions from 'firebase-functions';
import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);
bot.launch();

exports.sendMessage = functions.auth.user().onCreate(() => {
  return bot.telegram.sendMessage(
    process.env.TELEGRAM_CHAT_ID as string,
    process.env.TELEGRAM_MESSAGE as string
  );
});
