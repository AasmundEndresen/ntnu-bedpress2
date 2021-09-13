import coins from '../assets/data/coins.json'
import axios from 'axios'

const service = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/'
})

export const getAllCurrencies = async () => {
  try {
    const responses = coins.map(coin => service.get(`coins/${coin.id}`))
    const result = await Promise.all(responses)
    return result.map(({ data }) => data)
  } catch(err) {
    console.log(err)
  }
}