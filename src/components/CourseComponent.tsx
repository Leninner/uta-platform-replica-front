export interface ICourseComponentProps {
  title: string;
  description: string;
  duration: string;
  teacher: string;
  semester: string;
}

export const CourseComponent: React.FC<ICourseComponentProps> = (props) => {
  const { title, description, duration, teacher, semester } = props;
  return (
    <div className="course">
      <div className="course__title">{title}</div>
      <div className="course__description">{description}</div>
      <div className="course__duration">{duration}</div>
      <div className="course__author">{teacher}</div>
      <div className="course__semester">{semester}</div>
    </div>
  );
}