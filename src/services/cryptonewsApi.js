// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': 'f3ddc818d1msh996377ef5afa7dbp169a1cjsn9956dae77995',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({
  url,
  headers: headers,
})

// Define a service using a base URL and expected endpoints
export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
