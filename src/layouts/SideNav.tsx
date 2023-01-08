import React, { memo, useState } from 'react'
import { useRouter } from 'next/router'
import { IAppNavigationItem } from '../constants/appNavigation'
import { useAccount } from '../hooks/useAccount'
import { PagingBar } from '../components/PagingBar'

const SideNav = () => {
  const router = useRouter()
  const { userRoles } = useAccount()
  const pathName = router.pathname
  const [activeNav, changeActiveNav] = useState(false)

  const validateIsActive = (navItem: IAppNavigationItem) =>
    navItem.urlReference && pathName.includes(navItem.urlReference)

  const redirectPath = (navItem: IAppNavigationItem) => {
    if (!validateIsActive(navItem)) {
      router.push(navItem.href)
    }
  }

  const headerLayoutClassName = [
    'sidenav',
    'display-flex',
    'flex-column',
  ].join(' ')

  return (
    <header className={headerLayoutClassName}>
      {/* <div
        className="menu-toggle p-s-all"
        onClick={() => changeActiveNav(!activeNav)}
      >
        <SvgImport icon={icons.MENU} className="icon-24x" />
      </div> */}
      <div>
        <nav className="navigation height-100 flex-row">
          <ul className="width-100">
            <li>
              <PagingBar labelText="Navegación" />
              pepe
            </li>
            <li>
              hola
            </li>
            <li>
              como
            </li>
            {/* {Object.keys(publicNavigation).map((nav, key) => {
              const navItem: INavigationItem = mainNavigation[nav]
              return (
                haveAccess(userRoles || [], mainNavigation[nav]) && (
                  <li
                    key={`${key}-${toUrl(navItem.name)}`}
                    className={`dynamic-link flex-column flex-center m-b-s ${validateIsActive(navItem) ? 'active' : ''
                      }`}
                  >
                    <div
                      className="nav"
                      onClick={() => redirectPath(navItem)}
                    >
                      {validateIsActive(navItem) && (
                        <div className="indicator" />
                      )}
                      <div
                        className={`nav-item-content flex-row flex-middle p-l p-r ${validateIsActive(navItem) ? 'active' : ''
                          }`}
                      >
                        <div className="nav-item_s line-height-small text-secondary text-darken-2">
                          {navItem.name}
                        </div>
                      </div>
                    </div>
                  </li>
                )
              )
            })} */}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default memo(SideNav)
