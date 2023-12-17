import { Link } from "react-router-dom";
import Button from "../utilidades/Button";

const ItemCard = ({item}) => {

return (
    <article className="w-80 justify-center">
    <div >
    <img src={item.image} alt={item.imageAlt} className="productImg h-64 w-44 justify-center content-center "/>
    </div>
    <div className="justify-start">
    <h3 className="text-1xl font-semibold m-4 p-2 ">{item.name}</h3>
    <hr />
    <p className="text-xl font-bold">Precio: {item.price}</p>
    </div>
    <Button>
        <Link to={`/item/${item.id}`}>Ver más</Link>
    </Button>
    </article>
);
};

export default ItemCard;