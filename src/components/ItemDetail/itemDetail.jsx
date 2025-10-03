import { Item } from "../Item/Item"

export const ItemDetail = ({ detail }) => {

    return (
        <Item {...detail}>
            <button>Detalles</button>

        </Item>

    );

};