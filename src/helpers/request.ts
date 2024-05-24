import { RequestResponse } from '../types'

const request = async (
  origin: string,
  destination: string,
  date: string
): Promise<RequestResponse> => {
  const res = new Promise<RequestResponse>((resolve, reject) => {
    const url = `https://safar724.com/bus/getservices?origin=${origin}&destination=${destination}&date=${date}`

    fetch(url)
      .then((response) => {
        resolve(response.json())
      })
      .catch((error) => {
        console.log('Error:', error)

        reject(error)
      })
  })

  return res
}
export default request
