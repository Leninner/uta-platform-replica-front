import { SVG_ICONS } from "../constants/icons";
import { IconWrappedComponent } from "../wrappers/IconWrappedComponent";
import { AlertTypes, IAlert, removeAlertItem } from "../store/slices/alertSlice";
import { useAppDispatch } from "../store/hooks";

interface IAlertComponentProps {
  message: string
  icon?: keyof typeof SVG_ICONS
  type: AlertTypes
  alert: IAlert
}

export const AlertComponent = (props: IAlertComponentProps) => {
  const dispatch = useAppDispatch()
  const { message, icon, alert } = props;

  const handleCloseAlert = () => dispatch(removeAlertItem(alert))

  return (
    <div className="alert">
      <div className="content">
        <div onClick={handleCloseAlert}>
          <IconWrappedComponent icon={"X_ICON"} className='w-4 h-4 absolute right-2 top-2 cursor-pointer' />
        </div>
        <div className="message">
          {icon && <IconWrappedComponent icon={icon} className='w-6 h-6 my-2' />}
          {message}
        </div>
        <span className="h-1 w-full bg-red-500"/>
      </div>
    </div>
  )
}