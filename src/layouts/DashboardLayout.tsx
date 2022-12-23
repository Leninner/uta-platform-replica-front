import React from 'react'
import { SVG_ICONS } from '@/constants/icons'
import { DropdownComponent, IDropdownOption } from '../components/DropdownComponent'
import { IconWrappedComponent } from '../wrappers/IconWrappedComponent'
import { useSelector } from 'react-redux'

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
  return (
    <>
      <span>campana</span>
      <span>chat</span>
      <span>lenguaje</span>
      <div className='flex gap-3'>
        <span>MAZABANDA PULLUTAXI LENIN GIOVANNI</span>
        <img src="https://sistemaseducaciononline.uta.edu.ec/pluginfile.php/28468/user/icon/adaptable/f1?rev=255709" alt="image" className='rounded-full w-7'/>
      </div>
      <DropdownComponent
                value={1}
                onChange={() => null}
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

const Header = () => {
  const userInfo = useSelector((state: any) => state.user)
  return (
  <header>
    <div className='p-2 bg-[#333] border-b border-white flex justify-end text-white gap-4'>
      {firstMenu(userInfo)}
    </div>
    <div className='bg-[#AD272E] h-28 p-2'>
      <img src="https://sistemaseducaciononline.uta.edu.ec/pluginfile.php/1/theme_adaptable/logo/1670274806/sistemas.png" alt="" className='h-24'/>
    </div>
    <div className='p-2 bg-[#333] border-b-4 border-[#AD272E]'> hey hi</div>
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
