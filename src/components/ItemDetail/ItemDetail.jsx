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
        <div className="container m-auto mt-8 w-full bg-indigo-200 h-screen  max-[600px]:bg-neutral">
            <Button onClick={handleVolver} className='btnVolver fixed top-21 left-2 rounded-md text-white max-[600px]:absolute max-[600px]:top-16'> Volver</Button>
            <h3 className="text-3xl font-semibold font-sans">{item.name}</h3>
            <hr />
            <div className="cardContainer flex gap-8 pt-4 max-[600px]:flex max-[600px]:flex-col ">
                <div className="h-52 w-60 flex flex-col gap-4 ml-4  border-teal-900 max-[600px]:w-5/6">
                    <img src={item.image} alt={item.imageAlt} className='itemImg gap-4 rounded-md border-4 border-teal-400 ' />

                    {
                        isInCart(item.id)
                            ? <Button className="rounded-md bg-green-400 hover:bg-green-600 hover:text-white"><Link to="/cart">Terminar mi compra</Link></Button>
                            : <>
                                <QuantitySelector
                                    cantidad={cantidad}
                                    stock={item.stock}
                                    setCantidad={setCantidad}
                                />
                                <Button onClick={handleAgregar} disabled={item.stock === 0} className="bg-green-400 rounded-md m-5 hover:bg-green-600">Agregar al carrito</Button>
                            </>
                    }

                </div>

                <div className='itemText w-2/4 text-center flex flex-col max-[600px]:w-full max-[600px]:position: relative max-[600px]:top-40 max-[600px]:mt-48 bg-red-100 border border-teal-200 rounded-md'>
                    <p className=' m-4 text-center max-[600px]:m-8 gap-3 font-serif font-semibold '>{item.description}</p>
                    <p className="text-xl font-bold text-start m-4">Precio: ${item.price}</p>

                </div>
            </div>

        </div>
    );
};
export default ItemDetail;
