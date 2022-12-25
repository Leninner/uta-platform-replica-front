import type { NextPage } from 'next'

import { DashboardLayout } from '../../layouts/DashboardLayout'

interface ICoursesProps {
  courses: {
    name: string
    image: string
    semester: string
  }
}

const Courses: NextPage<ICoursesProps> = (props: ICoursesProps) => {
  return (
    <DashboardLayout>
      <DashboardLayout.Header/>

    </DashboardLayout>
   
  )
}

export default Courses