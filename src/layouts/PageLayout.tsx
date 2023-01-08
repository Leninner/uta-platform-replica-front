import React from 'react'
import { SVG_ICONS } from '@/constants/icons'

export type ILayoutVariant = 'primary' | 'secondary' | 'danger'
export type IAlignActions = 'center' | 'start' | 'end' | 'around'
export interface PageLayoutProps {
  children: React.ReactNode
}
const PageLayoutHOC = (props: PageLayoutProps) => (
  <div className="modal-layout">{props.children}</div>
)

interface ITitleProps {
  headerAlignment?: 'center' | 'start' | 'end'
  children?: React.ReactNode
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
  <header className={`${headerAlignments[headerAlignment]}`}>
    {props.children}
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
