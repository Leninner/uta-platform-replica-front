import { rootApi } from './rootApi'

export interface IUserInfoLogin {
  email: string
  password: string
}

export const loginApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: () => `auth/login`,
        method: 'POST',
        data: userInfo,
      }),
    }),
  }),
})

export const { useLoginMutation } = loginApi
