import { Link } from 'react-router-dom'
import './Nav.css'
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
    
    const {getTotalItems} = useCartContext();

    return (
        <nav>
       
            <div className="contenedor">
                <div className="caja"> <Link to={"/"}> Home </Link> </div>
                <div className="caja"><Link to={"/category/inverter"}> Inverter </Link> </div>
                <div className="caja"> <Link to={"/category/eco"}> Eco </Link> </div>
                <div className="caja"><Link to={"/carrito"}>Carrito: </Link> 
                    {getTotalItems() > 0 && (<span>{getTotalItems()} </span> )}
                    
                 </div>
                  
                
            </div>

         
            

            


        </nav>
    );

};

