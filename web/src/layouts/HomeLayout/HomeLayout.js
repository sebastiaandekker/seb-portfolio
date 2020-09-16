import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'

const HomeLayout = ({ children }) => {
  return (
    <div className="container mx-auto max-w-full antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout
