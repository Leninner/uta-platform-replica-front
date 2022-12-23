import type { NextPage } from 'next'

import { useState } from 'react'
import { DashboardLayout } from '../../layouts/DashboardLayout'

interface ICoursesProps {
  courses: {
    name: string
    image: string
    semester: string
  }
}

const Courses: NextPage<ICoursesProps> = (props: ICoursesProps) => {
  const [CoursesInfo, setCoursesInfo] = useState({
    emailLabel: '',
    passwordLabel: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCoursesInfo({ ...CoursesInfo, [name]: value })
  }
    
  return (
    <DashboardLayout>
      <DashboardLayout.Header/>

    </DashboardLayout>
   
  )
}

export default Courses