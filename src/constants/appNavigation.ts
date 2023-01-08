import { IRoleType } from "../utils/validAccessToRoute"

export interface IAppNavigationItem {
  name: string
  title?: string
  href: string
  urlReference?: string
  roleControl?: IRoleType[]
  customHeaderRight?: React.ReactElement
  icon?: string
}

export interface IAppNavigation {
  [key: string]: IAppNavigationItem
}

export const appNavigation: IAppNavigation = {
  login: {
    name: "login",
    title: "Login",
    href: "/login",
    urlReference: "/login",
    roleControl: ["ADMIN", "STUDENT", "TEACHER"],
  }, 
  courses: {
    name: "courses",
    title: "Cursos",
    href: "/courses",
    urlReference: "/courses",
    roleControl: ["ADMIN", "STUDENT", "TEACHER"],
  }
}
