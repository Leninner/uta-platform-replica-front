import type { NextPage } from 'next'
import { CourseComponent, ICourseComponentProps } from '../../components/CourseComponent'

import { DashboardLayout } from '../../layouts/DashboardLayout'

interface ICoursesProps {
  courses: ICourseComponentProps[]
}

const Courses: NextPage<ICoursesProps> = (props: ICoursesProps) => {
  return (
    <DashboardLayout>
      <DashboardLayout.Header/>
      <DashboardLayout.Body>
        <div className="courses">
          {props.courses?.map((course) => (
            <CourseComponent {...course} />
          ))}
        </div>
      </DashboardLayout.Body>
      <DashboardLayout.Footer>
        <div className="footer-actions center">
          <button className="btn btn-primary">Add Course</button>
        </div>
      </DashboardLayout.Footer>
    </DashboardLayout>
   
  )
}

export default Courses