import { IUser, ServerResponse } from './../../models/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  endpoints: build => ({
    searchUsers: build.query<ServerResponse<IUser>, string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10
        }
      })
    })
  })
})

export const { useSearchUsersQuery } = githubApi