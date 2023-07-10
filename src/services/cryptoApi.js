// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
  'X-RapidAPI-Key': 'f3ddc818d1msh996377ef5afa7dbp169a1cjsn9956dae77995',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}
const params = {
  timePeriod: '24h',
}
const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({
  url,
  headers: headers,
})

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi
