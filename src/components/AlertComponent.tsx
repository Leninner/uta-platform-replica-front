import { SVG_ICONS } from "../constants/icons";
import { IconWrappedComponent } from "../wrappers/IconWrappedComponent";
import { IAlert, removeAlertItem } from "../store/slices/alertSlice";
import { useAppDispatch } from "../store/hooks";

interface IAlertComponentProps {
  icon?: keyof typeof SVG_ICONS
  alert: IAlert
}

export const AlertComponent = (props: IAlertComponentProps) => {
  const dispatch = useAppDispatch()
  const { icon, alert } = props;
  const { title, value, type } = alert

  const handleCloseAlert = () => dispatch(removeAlertItem(alert))

  return (
    <div className={`alert`}>
      <div className={`content ${type.toLowerCase()}`}>
        <div onClick={handleCloseAlert}>
          <IconWrappedComponent icon={"X_ICON"} className='w-4 h-4 absolute right-2 top-2 cursor-pointer' />
        </div>
        <div className="message">
          {icon && <IconWrappedComponent icon={icon} className='w-6 h-6 my-2' />}
          <h3 className="font-bold">
            {title}
          </h3>
          <p className="font-light">{value}</p>
        </div>
        <span className="buttom-span"/>
      </div>
    </div>
  )
}