import Button from '../utilidades/Button'

const ItemDetail = ({ item }) => {

return (
    <div className="container m-auto mt-8 w-full ">
    <h3 className="text-2xl font-semibold">{item.name}</h3>
    <hr />
    <div className="flex gap-8 pt-4">
        <img src={item.image} alt={item.imageAlt} className='h-2/3 w-5/6 object-cover'/>

        <div>
        <p className='w-1/3 m-4'>{item.description}</p>
        <p className="text-xl font-bold text-start">Precio: {item.price}</p>
    <Button className="bg-teal-400 text-neutral-900 text-center flex m-4">Agregar al carrito</Button>

        </div>
    </div>

    </div>
);
};

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