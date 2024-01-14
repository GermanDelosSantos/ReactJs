import { useContext, useState } from "react";
import Button from '../utilidades/Button'
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import QuantitySelector from "./QuantitySelector";
import { Link } from "react-router-dom";

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
        <div className="container m-auto mt-8 w-full max-[600px]:flex flex-col">
            <Button onClick={handleVolver} className='btnVolver fixed top-21 left-2 rounded-md text-white'> Volver</Button>
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <hr />
            <div className="cardContainer flex gap-8 pt-4 ">
                <div className="h-52 w-60 flex flex-col m-5">
                    <img src={item.image} alt={item.imageAlt} className='itemImg gap-4 m-5 ' />

                    {
                        isInCart(item.id)
                            ? <Button className="rounded-md bg-gray-300 hover:bg-blue-500 hover:text-white"><Link to="/cart">Terminar mi compra</Link></Button>
                            : <>
                                <QuantitySelector
                                    cantidad={cantidad}
                                    stock={item.stock}
                                    setCantidad={setCantidad}
                                />
                                <Button onClick={handleAgregar} disabled={item.stock === 0} className="bg-gray-300 rounded-md m-5 hover:bg-green-400">Agregar al carrito</Button>
                            </>
                    }

                </div>

                <div className='itemText w-2/4 text-center flex flex-col max-[600px]:w-full'>
                    <p className=' m-4 text-center max-[600px]:m-8 gap-3'>{item.description}</p>
                    <p className="text-xl font-bold text-start m-4">Precio: ${item.price}</p>

                </div>
            </div>

        </div>
    );
};
export default ItemDetail;
