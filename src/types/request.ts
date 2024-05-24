import { Ticket } from './ticket'

export type RequestResponse = {
  Date: string
  OriginPersianName: string
  OriginEnglishName: string
  OriginCode: string
  DestinationPersianName: string
  DestinationEnglishName: string
  DestinationCode: string
  Today: string
  Logo: string
  Items: Ticket[]
}
