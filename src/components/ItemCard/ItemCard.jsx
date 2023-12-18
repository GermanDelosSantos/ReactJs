import { Link } from "react-router-dom";
import Button from "../utilidades/Button";

const ItemCard = ({item}) => {

return (
    <article className="w-80 justify-center rounded-md align-middle flex flex-col">
    <div className=" bg-blue-200">
    <img src={item.image} alt={item.imageAlt} className=" h-64 w-44 justify-center inline m-4"/>
    </div>
    <div className="justify-start bg-blue-200">
    <h3 className="text-1xl font-semibold p-2 text-start ">{item.name}</h3>
    <hr />
    <p className="text-xl font-bold p-2 text-start  ">Precio: {item.price}</p>
    </div>
    <Button className="bg-indigo-600 text-white">
        <Link to={`/item/${item.id}`}>Ver más</Link>
    </Button>
    </article>
);
};

export default ItemCard;