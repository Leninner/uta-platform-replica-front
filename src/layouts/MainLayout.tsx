import React from 'react'
import { AlertComponent } from '../components/AlertComponent'
import { useAccount } from '../hooks/useAccount'
import { useRoute } from '../hooks/useRoute'
import { useAppSelector } from '../store/hooks'

export type ILayoutVariant = 'primary' | 'secondary' | 'danger'
export type IAlignActions = 'center' | 'start' | 'end' | 'around'
export interface MainLayoutProps {
  children: React.ReactNode
}
const MainLayoutHOC = (props: MainLayoutProps) => {
  const loader = useAppSelector((state) => state.loader.loader)
  const alertList = useAppSelector((state) => state.alerts.alertList)
  const {isLoggedIn} = useAccount()
  const {
    isLoginRoute,
    redirectToLoginPage,
  } = useRoute()

  if(!isLoggedIn && !isLoginRoute) {
    redirectToLoginPage()
  }

  return (
    <main>
      {props.children}
      {
        alertList.map((alert, index) => (
          <AlertComponent key={index} icon={'EXCLAMATION'} alert={alert} />
        )
        )
      }
      {loader && <div className="loader" />}
    </main>
  )
}

interface MainLayoutMainProps {
  (props: MainLayoutProps): JSX.Element
}


export const MainLayout: MainLayoutMainProps = MainLayoutHOC
