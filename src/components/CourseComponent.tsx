import { SemesterEnum } from "../enums/semesterEnum";
import { ICourse } from "../store/slices/coursesSlice";

export const CourseComponent = (props: ICourse) => {
  const { name, semester, id } = props;

  return (
    <div className="course">
      <div className="image">
        <img src={`https://picsum.photos/200/300?random=${id}`} alt="course" />
      </div>

      <div className="summary">
        <div className="semester">{SemesterEnum[semester]}</div>
        <div className="name">{name}</div>
      </div>
    </div>
  );
}