import * as React from 'react'
import { useAppSelector } from '../store/hooks'


const LoaderView = () => {
  const loadingList = useAppSelector((state) => state.loader.loader)

  console.log({loadingList})

  return (
    <>
      {
        loadingList?.length > 0 && (
          <div className="loader-view">
            <div className='spin' />
          </div>)
      }
    </>
  )
}

export default React.memo(LoaderView)
