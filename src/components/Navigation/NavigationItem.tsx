import { NavLink } from "react-router-dom";

type Props = {
  label: string,
  url: string
}

const NavigationItem = (props: Props) => {

  const {label, url} = props;
  return (
    <div
      className="nav-tiem-container"
      >
      <NavLink to={url}>{label}</NavLink>
      <div className={`submenu`}>
        <ul>
          <li>Augmented Reality</li>
          <li>Virtual Reality</li>
          <li>Outsourcing</li>
          <li>Staff Augmentation</li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationItem;