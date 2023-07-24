
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductGallery from "./pages/ProductGallery"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductGallery />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
