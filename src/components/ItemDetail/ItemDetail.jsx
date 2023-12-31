import { useContext, useState } from "react";
import Button from '../utilidades/Button'
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import QuantitySelector from "./QuantitySelector";
import { Link} from "react-router-dom";

const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        const itemToCart = {
        ...item,
          cantidad, // => cantidad: cantidad
        }
    
        addToCart(itemToCart)
    }

    const handleVolver = () => {
        navigate(-1)
    }

return (
    <div className="container m-auto mt-8 w-full ">
    <Button onClick={handleVolver} className='btnVolver fixed top-21 left-2 rounded-md text-white'> Volver</Button>
    <h3 className="text-2xl font-semibold">{item.name}</h3>
    <hr />
    <div className="cardContainer flex gap-8 pt-4">
        <div className="h-52 w-60">
        <img src={item.image} alt={item.imageAlt} className='itemImg '/>

        </div>

        <div className='itemText w-1/4'>
        <p className=' m-4'>{item.description}</p>
        <p className="text-xl font-bold text-start m-4">Precio: ${item.price}</p>
        {
            isInCart( item.id )
            ? <Button className="rounded-md bg-gray-300"><Link to="/cart">Terminar mi compra</Link></Button>
            : <>
                <QuantitySelector 
                    cantidad={cantidad}
                    stock={item.stock}
                    setCantidad={ setCantidad }
                />          
                <Button onClick={handleAgregar} disabled={item.stock === 0} className="bg-gray-300 rounded-md m-5 ">Agregar al carrito</Button>
                </>
        }
        </div>
    </div>

    </div>
);
};
export default ItemDetail;
