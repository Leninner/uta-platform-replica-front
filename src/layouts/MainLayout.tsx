import React, { useEffect } from 'react'
import { AlertComponent } from '../components/AlertComponent'
import { useAccount } from '../hooks/useAccount'
import { useCheckAccess } from '../hooks/useCheckAccess'
import { useRoute } from '../hooks/useRoute'
import AlertsView from './AlertsView'
import LoaderView from './LoaderView'

export type ILayoutVariant = 'primary' | 'secondary' | 'danger'
export type IAlignActions = 'center' | 'start' | 'end' | 'around'
export interface MainLayoutProps {
  children: React.ReactNode
}
const MainLayoutHOC = (props: MainLayoutProps) => {
  const { redirectToLoginPage, redirectToInitialPage } = useRoute()
  const { isLoggedIn } = useAccount()

  useEffect(() => {
    if (isLoggedIn) {
      redirectToInitialPage()
    } else {
      redirectToLoginPage()
    }
  }, [isLoggedIn])

  return (
    <main>
      {props.children}
      <AlertsView />
      <LoaderView />
    </main>
  )
}

interface MainLayoutMainProps {
  (props: MainLayoutProps): JSX.Element
}


export const MainLayout: MainLayoutMainProps = MainLayoutHOC
