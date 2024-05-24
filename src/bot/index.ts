import { Bot } from '../types'
import messageHandler from './functions/messageHandler'
import start from './functions/start'

const handleBot = (bot: Bot) => {
  start(bot)
  messageHandler(bot)
}
export default handleBot
