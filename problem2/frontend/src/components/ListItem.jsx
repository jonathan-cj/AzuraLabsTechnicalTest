
const ListItem = (props) => { 
  const { item, active, onClick } = props;
  
  const containerClass = active 
    ? "transition-colors duration-200 flex items-center pl-1 w-[360px] h-[74px] bg-secondary-blue sticky top-0"
    : "transition-colors duration-200 flex items-center pl-1 w-[360px] h-[74px] bg-primary-0 group hover:bg-secondary-light hover:cursor-pointer";

  const labelClass = active
    ? "transition-colors duration-200 text-primary-0 text-h4 font-bold"
    : "transition-colors duration-200 text-primary-1000 text-h4 font-bold group-hover:text-primary-200";

  return (
    <div className={containerClass} onClick={onClick}>
      <p className={labelClass}>{item}</p>
    </div>
  )
}

export default ListItem;
