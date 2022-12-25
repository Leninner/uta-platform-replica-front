import { useEffect, useState } from 'react'
import { useAccount } from './useAccount'
import { useRoute } from './useRoute'

export const useCheckAccess = (): { isLoading: boolean } => {
  const {
    isLoginRoute,
    redirectToLoginPage,
    currentRoute,
  } = useRoute()
  const { isLoggedIn } = useAccount()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isLoggedIn && !isLoginRoute) {
      redirectToLoginPage().then(() => setLoading(true))
    } else {
      setLoading(true)
    }
  }, [isLoggedIn, currentRoute])

  return { isLoading: loading }
}
