import { Markup } from 'telegraf'
import MenuButtons from '../buttons/menu'
import { Bot } from '../../types'
import getTickets from './getTickets'

const messageHandler = (bot: Bot) => {
  bot.hears(MenuButtons[0][0], async (ctx) => {
    const today = new Date()
      .toLocaleDateString('fa-IR-u-nu-latn', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      .split('/')
      .join('%2F')

    const tickets = await getTickets(today)

    await ctx.reply(
      tickets,
      Markup.keyboard(MenuButtons)
    )
  })

  bot.hears(MenuButtons[0][1], async (ctx) => {
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
      .toLocaleDateString('fa-IR-u-nu-latn', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      .split('/')
      .join('%2F')

    const tickets = await getTickets(tomorrow)

    await ctx.reply(
      tickets,
      Markup.keyboard(MenuButtons)
    )
  })

  bot.hears(MenuButtons[0][2], async (ctx) => {
    const afterTomorrow = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000)
      .toLocaleDateString('fa-IR-u-nu-latn', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      })
      .split('/')
      .join('%2F')

    const tickets = await getTickets(afterTomorrow)

    await ctx.reply(
      tickets,
      Markup.keyboard(MenuButtons)
    )
  })
}
export default messageHandler
