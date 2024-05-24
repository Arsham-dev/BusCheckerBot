import { TehranNumber, HashtpatNumber, AstaraNumber } from '../../info'
import request from '../../helpers/request'

const getTickets = async (date:string):Promise<string> => {
  const hashtparTickets = await request(TehranNumber, HashtpatNumber, date)
  const astaraTickets = await request(TehranNumber, AstaraNumber, date)

  const tickets = [...hashtparTickets.Items.filter((ticket) => ticket.AvailableSeatCount > 0),
    ...astaraTickets.Items.filter((ticket) => ticket.AvailableSeatCount > 0)]

  const data = tickets.map((ticket) => [
    `🕒 Time: ${ticket.DepartureTime}`,
    `🚉 From: ${ticket.OriginTerminalName}`,
    `🚉 To: ${ticket.DestinationTerminalName}`,
    `🎟️ Remaining: ${ticket.AvailableSeatCount}`,
    `💰 Price: ${ticket.Price}`,
    `Description: ${ticket.Description}`
  ].join('\n')).join('\n\n')

  return data
}
export default getTickets
