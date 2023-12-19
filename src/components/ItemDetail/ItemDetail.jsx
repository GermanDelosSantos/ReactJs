import Button from '../utilidades/Button'
import './itemDetail.css'
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

return (
    <div className="container m-auto mt-8 w-full ">
    <Button onClick={handleVolver} className='fixed top-21 left-2 bg-neutral-600 text-white'> Volver</Button>
    <h3 className="text-2xl font-semibold">{item.name}</h3>
    <hr />
    <div className="flex gap-8 pt-4">
        <img src={item.image} alt={item.imageAlt} className='itemImg h-2/3 w-3/6'/>

        <div className='itemText'>
        <p className=' m-4'>{item.description}</p>
        <p className="text-xl font-bold text-start m-4">Precio: {item.price}</p>
        <Button className="itemBtn bg-teal-400 text-neutral-900 text-center flex m-4">Agregar al carrito</Button>

        </div>
    </div>

    </div>
);
};
//h-2/3 w-5/6 object-cover
export default ItemDetail;

/*
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
*/