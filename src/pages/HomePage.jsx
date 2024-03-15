import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import About from '../components/About'
import Product from '../components/Product'
import Online from '../components/Online'
const HomePaghe = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <div className='m_10'>
      <About/>
      </div>
      <div>
      <Product/>
      </div>
      <div>
      <Online/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePaghe