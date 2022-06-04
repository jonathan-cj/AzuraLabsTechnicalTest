import Navbar from "../modules/Navbar";

const TopNav = (props) => { 
  const { children, routes } = props;

  return (
    <div className="flex flex-col h-full">
      <nav className="h-[10vh]">
        <Navbar routes={routes}/>
      </nav>

      <main className="flex-grow bg-primary-200">
        {children}
      </main>
    </div>
  )
}

export default TopNav;
