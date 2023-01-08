import { useEffect } from 'react'
import { CourseListView } from '../../layouts/CourseListView'
import { useGetCoursesQuery } from '../../store/api/coursesApi'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setCourses } from '../../store/slices/coursesSlice'

const Courses = () => {
  const dispatch = useAppDispatch()
  const courses = useAppSelector(state => state.courses.courses)
  const { token, user: { rol, id } } = useAppSelector(state => state.account.account)
  const { data } = useGetCoursesQuery({
    token,
    rol,
    id
  })

  useEffect(() => {
    if (data) {
      dispatch(setCourses(data.courses))
    }
  }, [data])

  return (
    <>
      <span>Cursos a los que se ha accedido recientemente</span>
      <CourseListView courses={courses} />
      <span>Vista general del curso</span>
      <CourseListView courses={courses} />
    </>
  )
}

export default Courses