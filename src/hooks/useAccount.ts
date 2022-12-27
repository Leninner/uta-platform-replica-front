import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { IRootState } from '../store/store'
import { validAccessToRoute } from '../utils/validAccessToRoute'

export const useAccount = () => {
  const router = useRouter()
  const account = useSelector(
    (state: IRootState) => state.account
  )
  const haveAccessToRoute = validAccessToRoute(
    [account?.account?.user?.rol] || [],
    router.pathname,
  )
  
  return {
    isLoggedIn: !!account.account.token,
    haveRoles: !!account.account?.user?.rol,
    userRoles: account.account?.user?.rol,
    haveAccessToRoute,
    user: account.account.user,
  }
}
