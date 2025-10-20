import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'

export default function Home() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto] w-full">
      {/* Header */}
      <div className="w-full">
        <div className="mx-auto max-w-[min(92vw,3200px)]  py-6">
          <Header />
        </div>
      </div>

      {/* Main (a bit wider than header/footer) */}
      <div className="w-full">
        <div className="mx-auto max-w-[min(92vw,3200px)] px-[clamp(16px,4vw,80px)] py-6">
          <Main />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <div className="mx-auto max-w-[min(92vw,3200px)] px-[clamp(16px,4vw,80px)] py-8">
          <Footer />
        </div>
      </div>
    </div>
  )
}
