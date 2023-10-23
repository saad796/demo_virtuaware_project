import './App.css'
import BussinessPotentialSection from './assets/BussinessPotentialSection'
import ClientReviewSection from './assets/ClientReviewSection'
import DiscoverMoreSection from './assets/DiscoverMoreSection'
import FaqSections from './assets/FaqSections'
import Footer from './assets/Footer'
import Header from './assets/Header'
import PromoSection from './assets/PromoSection'
import RegisterSection from './assets/RegisterSection'
import SimpleSolutionSection from './assets/SimpleSolutionSection'
import TechnolgySection from './assets/TechnolgySection'

function App() {
 
  return (
    <div>
      <Header/>
      <TechnolgySection/>  
      <DiscoverMoreSection/>
      <SimpleSolutionSection/>
      <BussinessPotentialSection/>
      <ClientReviewSection/>
      <FaqSections/>
      <RegisterSection/>
      <PromoSection/>
      <Footer/>
    </div>
  )
}

export default App
