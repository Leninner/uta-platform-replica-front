import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAccount } from '../hooks/useAccount'
import { useRoute } from '../hooks/useRoute'
import LoaderView from '../layouts/LoaderView'
import { addAlertItem } from '../store/slices/alertSlice'
import { AlertTypes } from '../store/slices/alertSlice'

const NotFound = () => {
  const { redirectToLoginPage, redirectToInitialPage } = useRoute()
  const { isLoggedIn } = useAccount()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLoggedIn) {
      redirectToInitialPage()
    } else {
      redirectToLoginPage()
    }

    return () => {
      dispatch(
        addAlertItem(
          {
            value: 'La página a la que intenta acceder no existe',
            title: 'Página no encontrada',
            type: AlertTypes.INFO
          }
        )
      )
    }
  }, [])

  return <LoaderView />
}

export default NotFound
