import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'

export default function Home() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] w-full">
      {/* Header row */}
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-8">
          <Header />
        </div>
      </div>

      {/* Main row (grows) */}
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Main />
        </div>
      </div>

      {/* Footer row */}
      <div className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <Footer />
        </div>
      </div>
    </div>
  )
}
