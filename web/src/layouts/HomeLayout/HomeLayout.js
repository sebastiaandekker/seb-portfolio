const HomeLayout = ({ children }) => {
  return (
    <main>
      <div>Header with Logo and Menu</div>
      <div>Intro component with Image, Logo, </div>

      {children}
      <div>Footer with Logo and Contact</div>
    </main>
  )
}

export default HomeLayout
