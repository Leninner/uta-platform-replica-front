import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICourse {
    id: number
    name: string
    semester: string
    description: string
    image: string
    careerName: string
    teacherName: string
}

export interface ICourseState {
  courses: ICourse[]
}

export const initialCoursesState: ICourseState = {
  courses: [],
}

export const coursesSlice = createSlice({
  name: 'courses',
  initialState: initialCoursesState,
  reducers: {
    setCourses: (state, { payload }: PayloadAction<ICourse[]>) => {
      state.courses = payload
    },
  },
})

export const { setCourses } = coursesSlice.actions
export default coursesSlice.reducer
