import React, { useEffect } from 'react'
import { SVG_ICONS } from '@/constants/icons'
import { DropdownComponent, IDropdownOption } from '../components/DropdownComponent'
import { IconWrappedComponent } from '../wrappers/IconWrappedComponent'
import { useSelector } from 'react-redux'
import { BellIcon, BookOpenIcon, CalendarIcon, FolderIcon, HomeIcon } from '@heroicons/react/solid'
import { useAccount } from '../hooks/useAccount'
import { useRouter } from 'next/router'
import { IRootState } from '../store/store'
import { useCheckAccess } from '../hooks/useCheckAccess'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/slices/accountSlice'

export type ILayoutVariant = 'primary' | 'secondary' | 'danger'
export type IAlignActions = 'center' | 'start' | 'end' | 'around'
export interface DashboardLayoutProps {
  children: React.ReactNode
}
const DashboardLayoutHOC = (props: DashboardLayoutProps) => (
  <div className="dashboard-layout">{props.children}</div>
)

interface ITitleProps {
  title: string
  subTitle?: string
  className?: string
  headerAlignment?: 'center' | 'start' | 'end'
  isLoginPage?: boolean
}

interface IBodyProps {
  children: React.ReactNode
}

interface IFooterProps {
  variant?: 'danger' | 'primary' | 'secondary' | 'white'
  alignActions?: IAlignActions
  submitLabel?: string
  cancelLabel?: string
  children?: React.ReactNode
}

interface IIConProps {
  iconName: keyof typeof SVG_ICONS
  iconClassName?: string
  className?: string
}

interface DashboardLayoutMainProps {
  (props: DashboardLayoutProps): JSX.Element
  Header: () => JSX.Element
  Icon: (props: IIConProps) => JSX.Element
  Body: (props: IBodyProps) => JSX.Element
  Footer: (props: IFooterProps) => JSX.Element
}

const headerAlignments = {
  center: 'flex justify-center items-center',
  start: 'flex justify-start items-start',
  end: 'flex justify-end items-end',
}

const options: IDropdownOption[] = [
  {
      label: 'Tennis',
      value: 1,
  },
  {
      label: 'Basket',
      value: 2,
  },
  {
      label: 'Cerrar sesión',
      value: 3,
      icon: 'EXCLAMATION',
  },
]

const firstMenu = (userInfo: any) => {
  const dispatch = useAppDispatch()

  const processByOption = (option: IDropdownOption) => {
    switch (option.value) {
      case 1:
        console.log('option 1')
        break
      case 2:
        console.log('option 2')
        break
      case 3:
        dispatch(logout())
        break
      default:
        break
    }
  }

  return (
    <>
      <BellIcon className="block h-6 w-6" aria-hidden="true" />
      <div className='flex gap-3'>
        <span>{userInfo.name}</span>
        <img src="https://sistemaseducaciononline.uta.edu.ec/pluginfile.php/28468/user/icon/adaptable/f1?rev=255709" alt="image" className='rounded-full w-7'/>
      </div>
      <DropdownComponent
                value={1}
                onChange={(option) => processByOption(option)}
                options={options}
                placeholder="pick an option"
                iconHeader="CHEVRON_DOWN"
                variant="secondary"
                includeDividers={true}
            >
                {(option) => (
                    <>
                        <IconWrappedComponent
                            icon="MAIL"
                            role="leading-icon"
                            className="h-5 w-5 text-white mr-2"
                        />

                        {option.label}
                    </>
                )}
            </DropdownComponent>
    </>
  )
}

const secondMenu = (userInfo: any) => {
  return (
    <section className='flex gap-6 text-white'>
      <div className='flex gap-3 cursor-pointer'>
        <HomeIcon className="block h-6 w-6" aria-hidden="true" />
        <span>Inicio</span>
      </div>
      <div className='flex gap-3 cursor-pointer'>
        <BookOpenIcon className="block h-6 w-6" aria-hidden="true" />
        <span>Área personal</span>
      </div>
      <div className='flex gap-3 cursor-pointer'>
        <CalendarIcon className="block h-6 w-6" aria-hidden="true" />
        <span>Eventos</span>
      </div>
      <div className='flex gap-3 cursor-pointer'>
        <FolderIcon className="block h-6 w-6" aria-hidden="true" />
        <span>Mis cursos</span>
      </div>
    </section>
  )
}

const Header = () => {
  const router = useRouter()
  const { isLoggedIn } = useAccount()

  useEffect(() => {
    if(!isLoggedIn) router.push('/login')
  }, [isLoggedIn])

  const userInfo = useSelector((state: IRootState) => state.account.account.user)

  return (
    <header>
      <div className='p-2 bg-[#333] border-b border-white flex justify-end text-white gap-4'>
        {firstMenu(userInfo)}
      </div>
      <div className='bg-[#AD272E] h-28 p-2'>
        <img src="https://sistemaseducaciononline.uta.edu.ec/pluginfile.php/1/theme_adaptable/logo/1670274806/sistemas.png" alt="" className='h-24'/>
      </div>
      <div className='p-2 bg-[#333] border-b-4 border-[#AD272E]'>
        {secondMenu(userInfo)}
      </div>
    </header>
  )
  }

const Body = (props: IBodyProps) => <div className="body">{props.children}</div>

const Footer = (props: IFooterProps) => {
  const {
    alignActions,
    children
  } = props

  const getAlignStyle = () => {
    if (!alignActions) {
      return 'footer-actions center'
    }

    return 'footer-actions'.concat(` ${alignActions}`)
  }

  return (
    <div className={getAlignStyle()}>
      {children}
    </div>
  )
}

const Icon = (props: IIConProps) => {
  const { className = '', iconClassName = '', iconName } = props
  const backgroundStyles = [
    'mx-auto flex items-center justify-center h-12 w-12 rounded-full',
    className,
  ]
    .join(' ')
    .trim()

  return (
    <div className={backgroundStyles}>
      
    </div>
  )
}

DashboardLayoutHOC.Header = Header
DashboardLayoutHOC.Body = Body
DashboardLayoutHOC.Footer = Footer
DashboardLayoutHOC.Icon = Icon

export const DashboardLayout: DashboardLayoutMainProps = Object.assign(
  DashboardLayoutHOC,
  {
    Icon,
    Header,
    Body,
    Footer,
  }
)
