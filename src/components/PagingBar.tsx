interface IPagingBarProps {
  labelText: string
  icon?: string
  hasOccultAction?: boolean
}

export const PagingBar = (props: IPagingBarProps) => {
  return (
    <div className="paging-bar">
      {props.labelText}
    </div>
  )
}