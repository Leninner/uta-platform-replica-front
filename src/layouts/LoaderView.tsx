import * as React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useAppSelector } from '../store/hooks'


const LoaderView = () => {
  const loadingList = useAppSelector((state) => state.loader.loader)

  return (
    <CSSTransition
      in={!!loadingList.length}
      timeout={300}
      classNames="alert"
      unmountOnExit={true}
    >
      <div className="loader-view">
        <div>
          leninner
        </div>
      </div>
    </CSSTransition>
  )
}

export default React.memo(LoaderView)
