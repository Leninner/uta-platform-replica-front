import { CourseComponent } from "../components/CourseComponent"
import { ICourse } from "../store/slices/coursesSlice"

export const CourseListView = (props: {courses: ICourse[]}) => {
  return (<div className="courses-view">
    {props.courses?.map((course) => (
      <CourseComponent {...course} />
    ))}
  </div>)
}