import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Heroseaction'
import Features from './components/FeaturesRow'
import TrendingGames from './components/TrendingGame'
import TopCategories from './components/TopCategories'
import NewsletterBanner from './components/CtaNewLettersection'
import Footer from './components/Footer'
import OurShop from './components/OurShop'
import MostPlayed from './components/MostPlayed'


export default function App() {
  const [currentPage, setCurrentPage] = useState('home') // 'home' | 'shop'

  const goToShop = () => {
    setCurrentPage('shop')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToHome = () => {
    setCurrentPage('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-between'>
      <div>
        <Navbar
          currentPage={currentPage}
          onNavigateHome={goToHome}
          onNavigateShop={goToShop}
        />

        {currentPage === 'home' ? (
          <>
            <Hero />
            <Features />
            <TrendingGames onViewAll={goToShop} />
            <MostPlayed onViewAll={() => console.log('View all clicked')} />
            <TopCategories />
            <NewsletterBanner />
          </>
        ) : (
          <OurShop onBackHome={goToHome} />
        )}
      </div>

      <Footer />
    </div>
  )
}