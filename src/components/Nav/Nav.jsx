import { Link } from 'react-router-dom'
import './Nav.css'
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
    
    const {getTotalItems} = useCartContext();

    return (
        <nav>
       
            <lu className="contenedor">
                <li className="caja"> <Link to={"/"}> Home </Link> </li>
                <li className="caja"><Link to={"/category/inverter"}> Inverter </Link> </li>
                <li className="caja"> <Link to={"/category/eco"}> Eco </Link> </li>
                <li className="caja"><Link to={"/carrito"}>Carrito: {getTotalItems() > 0 && (<span>{getTotalItems()} </span> )}</Link></li>
                  
                
            </lu>

         
            

            


        </nav>
    );

};

