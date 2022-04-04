import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '597af6d508msh4f437f40e535ef2p15d49ejsnefd36dd2c4a6'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/'

const createRequest = (url) => ({ url: url, headers: cryptoApiHeaders })


export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest ('/coins')
    })
  })
})

export const {
  useGetCryptosQuery,
} = cryptoApi;
