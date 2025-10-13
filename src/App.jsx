import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemsListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
        <div>
          <Header/>

        <Routes>
          <Route path="/" element={<ItemListContainer titulo={"Bienvenido a su tienda"} />}        />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
        </div>
    
    </BrowserRouter>
      <Footer />
    </> 
  );
};

export default App
