import { ItemList } from "../ItemsList/ItemList";

export const ItemListContainer = ( {titulo, producto}) => {

    return (
<section>
    <h1>{titulo}</h1>
    <ItemList lista={producto} />
</section>

    );


}