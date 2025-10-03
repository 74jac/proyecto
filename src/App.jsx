import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemsListContainer'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <>
      <div>
        <Header/>
        {<ItemListContainer titulo={"Bienvenido a su tienda"} /> }
        {<ItemDetailContainer />}
        <Footer />
      </div>
    </> 
  );
};

export default App
