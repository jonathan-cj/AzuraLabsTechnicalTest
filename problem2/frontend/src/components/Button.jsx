
const Button = (props) => { 
  const { children, onClick, disable } = props;

  return (
    <div onClick={onClick} className={`${disable ? 'bg-secondary-dark' : 'bg-secondary-blue'} hover:bg-secondary-dark hover:cursor-pointer text-primary-0 w-full h-full flex justify-center items-center`}>
      {children}
    </div>
  )
}

export default Button;
