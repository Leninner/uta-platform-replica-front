import React, { useEffect } from 'react'
import { AlertComponent } from '../components/AlertComponent'
import { useAccount } from '../hooks/useAccount'
import { useCheckAccess } from '../hooks/useCheckAccess'
import { useRoute } from '../hooks/useRoute'
import AlertsView from './AlertsView'
import { DashboardLayout } from './DashboardLayout'
import LoaderView from './LoaderView'

export type ILayoutVariant = 'primary' | 'secondary' | 'danger'
export type IAlignActions = 'center' | 'start' | 'end' | 'around'
export interface MainLayoutProps {
  children: React.ReactNode
}
const MainLayoutHOC = (props: MainLayoutProps) => {
  const { redirectToLoginPage, redirectToInitialPage, is404Page } = useRoute()
  const { isLoggedIn } = useAccount()

  useEffect(() => {
    if (isLoggedIn) {
      redirectToInitialPage()
    } else {
      redirectToLoginPage()
    }
  }, [isLoggedIn])

  return isLoggedIn && !is404Page ? (
    (
      <main>
        <DashboardLayout>
          <DashboardLayout.Header />
          <DashboardLayout.Body>
            {props.children}
          </DashboardLayout.Body>
          <DashboardLayout.Footer>
            <div className="footer-actions center">
              <button className="btn btn-primary">Add Course</button>
            </div>
          </DashboardLayout.Footer>
        </DashboardLayout>
        <LoaderView />
        <AlertsView />
      </main>
    )
  ) : (
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
