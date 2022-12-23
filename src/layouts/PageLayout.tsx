import React from 'react'

import { useDispatch } from 'react-redux'

import { SVG_ICONS } from '@/constants/icons'
import { ButtonComponent } from '@/components/ButtonComponent'
import { closeModal } from '@/store/slices/modalSlice'

export type ILayoutVariant = 'primary' | 'secondary' | 'danger'
export type IAlignActions = 'center' | 'start' | 'end' | 'around'
export interface PageLayoutProps {
  children: React.ReactNode
}
const PageLayoutHOC = (props: PageLayoutProps) => (
  <div className="modal-layout">{props.children}</div>
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

interface PageLayoutMainProps {
  (props: PageLayoutProps): JSX.Element
  Title: (props: ITitleProps) => JSX.Element
  Icon: (props: IIConProps) => JSX.Element
  Body: (props: IBodyProps) => JSX.Element
  Footer: (props: IFooterProps) => JSX.Element
}

const headerAlignments = {
  center: 'flex justify-center items-center',
  start: 'flex justify-start items-start',
  end: 'flex justify-end items-end',
}

const Title = ({headerAlignment = 'start', ...props}: ITitleProps) => (
  <header className={headerAlignments[headerAlignment]}>
    {props.isLoginPage && (
      <img src="https://sistemaseducaciononline.uta.edu.ec/pluginfile.php/1/theme_adaptable/adaptablemarkettingimages/0/logo-uta.png" alt="some" className='w-40'/>
    )}
    <div className='flex items-center flex-col'>
      <h3 className={`text-3xl leading-6 font-medium text-gray-900 ${props.className}`}>{props.title}</h3>
      {props.subTitle && (
        <p className="mt-1 max-w-2xl text-md text-gray-900">{props.subTitle}</p>
      )}
    </div>
    {props.isLoginPage && (
      <img src="https://sistemaseducaciononline.uta.edu.ec/pluginfile.php/1/theme_adaptable/adaptablemarkettingimages/0/sistemas.png" alt="some" className='w-40'/>
    )}
  </header>
)

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

PageLayoutHOC.Title = Title
PageLayoutHOC.Body = Body
PageLayoutHOC.Footer = Footer
PageLayoutHOC.Icon = Icon

export const PageLayout: PageLayoutMainProps = Object.assign(
  PageLayoutHOC,
  {
    Icon,
    Title,
    Body,
    Footer,
  }
)
