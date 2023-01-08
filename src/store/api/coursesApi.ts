import { rootApi } from './rootApi'

export interface IUserInfoLogin {
  email: string
  password: string
}

export const coursesApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: (props) => {
        return {
          url: () => `courses/${props.rol}/${props.id}`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${props.token}`,
          },
        }
      },
    }),
  }),
})

export const { useGetCoursesQuery } = coursesApi
