import { config } from 'dotenv'
import { Telegraf } from 'telegraf'
import handleBot from './bot'

config()

const main = async () => {
  // const response = await request(
  //   '11320000',
  //   '54320000',
  //   ['1403', '03', '08'].join('%2F')
  // )

  const bot = new Telegraf(process.env.BOT_TOKEN)
  handleBot(bot)
  bot.launch().then(() => console.log('Bot is running'))
}

main()
