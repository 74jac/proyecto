import { Link } from 'react-router-dom'
import './Nav.css'
export const Nav = () => {
    return (
        <nav>
            <div className="contenedor">
                <div className="caja"> <Link to={"/"}> Home </Link> </div>
                <div className="caja"><Link to={"/category/inverter"}> Inverter </Link> </div>
                <div className="caja"> <Link to={"category/Eco"}> Eco </Link> </div>

            </div>


            

            


        </nav>
    );

};

