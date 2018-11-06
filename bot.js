const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const LT_URL = 'https://fuzzy-octopus-71.localtunnel.me'
const BOT_TOKEN = '747892200:AAESi-TqEW25rLjhgQvRaZrkXL80uBlDuNU';
const bot = new Telegraf(BOT_TOKEN)

// Helpers
String.prototype.contains = function(words) {
    let match = true
    const text = this.toLowerCase()
    for (let word of words) {
        match = text.includes(word.toLowerCase())
    }
    return match
}

// Keyboards
const keyboard = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Delete', 'delete')
])

// Events
bot.start((ctx) => {
    ctx.reply('Hello ' + ctx.message.from.first_name + ', IP4 the bot is ready to serve! 🤖')
})
bot.help((ctx) => ctx.reply('"We cannot help everyone, but everyone can help someone."\n- Ronald Raegan'))

// Actions
bot.action('delete', ({ deleteMessage }) => deleteMessage())

// Replies
bot.on('message', (ctx) => {
    // ctx.telegram.sendCopy(ctx.from.id, ctx.message, Extra.markup(keyboard))
    // ctx.telegram.sendMessage(ctx.from.id, 'kuntul')
    const text = ctx.message.text
    if (text.contains(['set', 'daily', 'reminder'])) {
        ctx.reply('Okay, I will remind you every huyu')
    } else {
        ctx.reply('belom ngerti bang')
    }
})

// npm install -g localtunnel && lt --port 3000
// bot.telegram.setWebhook(LT_URL + '/asu')
// bot.startWebhook('/asu', null, 3000)

bot.startPolling()