const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center mt-6 px-4 mb-12 md:mb-16 lg:mb-20">
      <div className="font-sansBold text-h4 tracking-widest">SEB</div>
      <div className="md:hidden font-sansMedium tracking-widest">menu</div>
      <nav className="hidden md:block font-sansMedium md:text-lg tracking-wider">
        <ul className="flex flex-row">
          <li className="mr-4">
            <a href="#">Work</a>
          </li>
          <li className="mr-4">
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
