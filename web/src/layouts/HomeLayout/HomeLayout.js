import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'

const HomeLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default HomeLayout
