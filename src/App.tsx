import Navbar from './components/Navbar.tsx'
import AppRoutes from './routes/AppRoutes.tsx'
import Footer from './components/Footer.tsx'

const App = () => {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer/>
    </>
  )
}

export default App