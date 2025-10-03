import { useEffect, useState } from "react";
import { ItemList } from "../ItemsList/ItemList";

export const ItemListContainer = ( { titulo }) => {
    const [products ,setProducts] = useState ([]);

    useEffect (() => {
        fetch ("/data/products.json")
            .then ((res) => {
                if(!res.ok) {
                    throw new Error("Hubo un propblema al buscar producto");
                }
                return res.json();
            })
            .then ((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <section>
            <h1>{titulo}</h1>
            <ItemList lista={products} />
        </section>

    );


};