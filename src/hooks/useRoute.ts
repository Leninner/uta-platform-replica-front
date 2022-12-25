import { useRouter } from 'next/router'
import { appNavigation } from '../constants/appNavigation'
import { IRoleType } from '../utils/validAccessToRoute'

export const useRoute = () => {
  const router = useRouter()

  const redirectToLoginPage = async () =>
    await router.push(appNavigation.login)
  const haveAccesToThisRoute = (roles: IRoleType[], userRoles: IRoleType[]) =>
    !!roles?.filter((element) => userRoles.includes(element)).length

  return {
    currentRoute: router.asPath,
    is404Page: ['/404'].includes(router.pathname),
    isRootPage: ['/'].includes(router.pathname),
    isLoginRoute: ['/login'].includes(router.pathname),
    redirectToLoginPage,
    haveAccesToThisRoute,
  }
}
