import Head from 'next/head'
import { useEffect } from 'react'
import { PagingBar } from '../../components/PagingBar'
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
    <section className='flex flex-col gap-10'>
      <Head>
        <title>Área personal</title>
      </Head>
      <div>
        <PagingBar labelText="Vista general del curso" />
        <CourseListView courses={courses} />
      </div>
    </section>
  )
}

export default Courses