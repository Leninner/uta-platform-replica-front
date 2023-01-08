import { AlertTypes } from '../slices/alertSlice'
import { rootApi } from './rootApi'

export const coursesApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: (props) => {
        return {
          url: () => `courses/${props.rol}/${props.id}`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${props.token}`,
          },
          errorMessage: {
            value: 'Error al obtener los cursos',
            type: AlertTypes.ERROR,
            title: 'Api error',
          }
        }
      },
    }),
  }),
})

export const { useGetCoursesQuery } = coursesApi
