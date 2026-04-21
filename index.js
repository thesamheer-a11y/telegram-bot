const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

// /start
bot.onText(/\/start/, (msg) => {
  if (msg.chat.type !== "private") return;

  bot.sendMessage(
    msg.chat.id,
    "• UNDER 400 - Rs 10\n" +
    "• Rs 401 To Rs 2000 - 3%\n" +
    "• Rs 2001 To Rs 5K - 3.5%\n" +
    "• Upper Than Rs 5K - 3%\n\n" +
    "RG - @KALKIESCROWSERVICE\n" +
    "Made By - @tumlu"
  );
});

// /p
bot.onText(/\/p (.+)/, (msg, match) => {
  let amt = parseFloat(match[1]);

  if (!amt) {
    bot.sendMessage(msg.chat.id, "Use like: /p 1000");
    return;
  }

  let fee = 0;
  let percent = "";

  if (amt <= 400) {
    fee = 10;
    percent = "Fixed";
  } else if (amt <= 2000) {
    fee = amt * 0.03;
    percent = "3%";
  } else if (amt <= 5000) {
    fee = amt * 0.035;
    percent = "3.5%";
  } else {
    fee = amt * 0.03;
    percent = "3%";
  }

  let total = amt + fee;

  bot.sendMessage(
    msg.chat.id,
    `₹${amt} + ₹${fee.toFixed(2)} (${percent}) = ₹${total.toFixed(2)}`
  );
});

// /c
bot.onText(/\/c (.+)/, (msg, match) => {
  let amt = parseFloat(match[1]);

  if (!amt) {
    bot.sendMessage(msg.chat.id, "Use like: /c 1000");
    return;
  }

  let fee = 0;
  let percent = "";

  if (amt <= 400) {
    fee = 10;
    percent = "Fixed";
  } else if (amt <= 2000) {
    fee = amt * 0.03;
    percent = "3%";
  } else if (amt <= 5000) {
    fee = amt * 0.035;
    percent = "3.5%";
  } else {
    fee = amt * 0.03;
    percent = "3%";
  }

  let final = amt - fee;

  bot.sendMessage(
    msg.chat.id,
    `₹${amt} - ₹${fee.toFixed(2)} (${percent}) = ₹${final.toFixed(2)}`
  );
});
