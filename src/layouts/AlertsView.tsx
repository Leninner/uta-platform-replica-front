import * as React from 'react'
import { AlertComponent } from '../components/AlertComponent'
import { useAppSelector } from '../store/hooks'

const AlertsView = () => {
  const alertList = useAppSelector(state => state.alerts.alertList)
  return (
    <div className="alert-view">
      {alertList.map((alert, index) => (
        <AlertComponent key={index} icon={'EXCLAMATION'} alert={alert} />
      )
      )}
    </div>
  )
}

export default React.memo(AlertsView)
