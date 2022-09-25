import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
      getPokemonByName: builder.query({
        query: (name: string) => `pokemon/${name}`,
        //used to normilized data
        transformResponse(baseQueryReturnValue: unknown, meta: unknown, arg: unknown){
           //returned value that can be normilized
           console.log('base-->', baseQueryReturnValue);
           //meta information
           console.log('meta-->', meta);
           //passed arguments
           console.log('arg-->', arg);
        }
      }),
    }),
  })

  
  export const { useGetPokemonByNameQuery } = pokemonApi