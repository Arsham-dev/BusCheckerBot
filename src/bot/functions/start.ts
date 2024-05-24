import { Markup } from 'telegraf'
import { Bot } from '../../types'
import MenuButtons from '../buttons/menu'

const start = async (bot: Bot) => {
  bot.start((ctx) => {
    ctx
      .reply('Welcome to the bot!', Markup.keyboard(MenuButtons).resize())
      .catch((err) => console.error(err))
  })
}

export default start
