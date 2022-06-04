import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NavItem = (props) => { 
  const { label, path } = props;

	const location = useLocation();

  const itemClass = location.pathname === path 
    ? "transition-colors duration-200 h-full w-40 flex flex-row items-center justify-center bg-primary-200" 
    : "transition-colors duration-200 h-full w-40 flex flex-row items-center justify-center bg-primary-800 group hover:bg-primary-400 hover:cursor-pointer";

  const labelClass = location.pathname === path
    ? "transition-colors duration-200 text-primary-400"
    : "transition-colors duration-200 text-primary-0";
  
  return (
    <Link className={itemClass} to={path}>
      <p className={labelClass}>{label}</p>
    </Link>
  )
}

export default NavItem;
