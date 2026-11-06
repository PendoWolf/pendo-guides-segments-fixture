import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import { CartProvider } from './context/CartContext'
import { ProfileProvider } from './context/ProfileContext'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import Profile from './pages/Profile'
import Warning from './pages/Warning'
import Poll from './pages/Poll'
import Report from './pages/Report'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <ProfileProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="pie/:slug" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="success/:orderId" element={<Success />} />
              <Route path="profile" element={<Profile />} />
              <Route path="warning" element={<Warning />} />
              <Route path="poll" element={<Poll />} />
              <Route path="report" element={<Report />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ProfileProvider>
  )
}
