import { IRoleType } from "../utils/validAccessToRoute"

export interface IAppNavigationItem {
  name: string
  title?: string
  href?: string
  urlReference?: string
  roleControl?: IRoleType[]
  customHeaderRight?: React.ReactElement
  icon?: string
}

export interface IAppNavigation extends IAppNavigationItem {
  child?: IAppNavigationItem[]
}

export const appNavigation: IAppNavigation[] = [
  {
    name: "Dashboard",
    title: "Dashboard",
    href: "/courses",
    roleControl: ["ADMIN", "STUDENT", "TEACHER"],
    icon: "dashboard",
  },
  {
    name: "Courses",
    title: "Courses",
    href: "/courses",
    roleControl: ["ADMIN", "STUDENT", "TEACHER"],
    icon: "book",
  },
  {
    name: "Students",
    title: "Students",
    href: "/students",
    roleControl: ["ADMIN"],
    icon: "users",
  },
  {
    name: "Teachers",
    title: "Teachers",
    href: "/teachers",
    roleControl: ["ADMIN"],
    icon: "users",
  },
  {
    name: "Settings",
    title: "Settings",
    href: "/settings",
    roleControl: ["ADMIN"],
    icon: "settings",
  },
]
