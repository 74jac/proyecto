import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Nav } from "./components/Nav/Nav";
import { ItemListContainer } from './components/ItemListContainer/ItemsListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext/CartProvider'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <div>
            <Header />
             <Nav />
            <Routes>
              <Route path="/" element={<ItemListContainer titulo={"Bienvenido a su tienda"} />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
            </Routes>
          </div>
        </CartProvider>
      </BrowserRouter>
      <Footer />
    </> 
  );
};

export default App
