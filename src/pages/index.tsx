import type { NextPage } from 'next'
import LoaderView from '../layouts/LoaderView'
import { useEffect } from 'react'
import { useAccount } from '../hooks/useAccount'
import { useRoute } from '../hooks/useRoute'

const HomePage: NextPage = () => {
  const { redirectToLoginPage, redirectToInitialPage } = useRoute()
  const { isLoggedIn } = useAccount()
  useEffect(() => {
    if (isLoggedIn) {
      redirectToInitialPage()
    } else {
      redirectToLoginPage()
    }
  }, [])
  return <LoaderView />
}

export default HomePage
