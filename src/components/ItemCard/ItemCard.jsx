import { Link } from "react-router-dom";
import Button from "../utilidades/Button";

const ItemCard = ({item}) => {

return (
    <article className="w-80">
    <img src={item.imageSrc} alt={item.imageAlt} />
    <h3 className="text-2xl font-semibold">{item.name}</h3>
    <hr />
    <p className="text-xl font-bold">Precio: {item.price}</p>

    <Button>
        <Link to={`/item/${item.id}`}>Ver más</Link>
    </Button>
    </article>
);
};

export default ItemCard;