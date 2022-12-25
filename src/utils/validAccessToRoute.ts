import { appNavigation, IAppNavigationItem } from "../constants/appNavigation"

export const haveAccess = (userRole: IRoleType[], navMain: IAppNavigationItem) => {
  let haveAccess = false

  const access =
    !navMain.roleControl ||
    navMain.roleControl.some((itemRole) => userRole?.includes(itemRole))

  if (access) {
    haveAccess = true
  }
  return haveAccess
}

export type IRoleType = 'ADMIN' | 'STUDENT' | 'TEACHER'

export const validAccessToRoute = (
  userRole: IRoleType[],
  path: string,
) => {
  let haveAccess = false
  appNavigation.forEach((nav) => {
    if (path === nav.href) {
      const navMain = nav
      const accessByRol =
        !navMain.roleControl ||
        navMain.roleControl.every((itemRole) => userRole?.includes(itemRole))
      if (accessByRol) {
        haveAccess = true
      }
    }
  })
  return haveAccess
}
