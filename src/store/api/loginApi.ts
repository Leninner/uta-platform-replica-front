import { AlertTypes } from '../slices/alertSlice'
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
        errorMessage: {
          value: 'Email o contraseña incorrectos',
          type: AlertTypes.ERROR,
          title: 'Error de login',
        },
        successMessage: {
          value: 'Login correcto',
          type: AlertTypes.SUCCESS,
          title: 'Login correcto',
        },
      }),
    }),
  }),
})

export const { useLoginMutation } = loginApi
