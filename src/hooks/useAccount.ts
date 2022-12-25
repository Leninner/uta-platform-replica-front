import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { IRootState } from '../store/store'
import { validAccessToRoute } from '../utils/validAccessToRoute'

export const useAccount = () => {
  const router = useRouter()
  const account = useSelector(
    (state: IRootState) => state.account.account
  )
  const haveAccessToRoute = validAccessToRoute(
    [account?.user?.rol] || [],
    router.pathname,
  )

  return {
    isLoggedIn: !!account.token,
    haveRoles: !!account?.user?.rol,
    userRoles: account?.user?.rol,
    haveAccessToRoute,
    user: account.user,
  }
}
