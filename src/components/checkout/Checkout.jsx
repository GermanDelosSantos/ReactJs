import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"

const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const [orderId, setOrderId] = useState(null);

    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date()
        }

        const ordersRef = collection(db, 'orders')
        
        addDoc(ordersRef, orden).then((doc) => {
            setOrderId(doc.id)
            clearCart()
    
        });
        
        };



    if (orderId) {
        return (
            <div className="container m-auto mt-10">
                <h2 className="text-4xl font-semibold">Gracias por tu compra</h2>
                <hr />
                <p>Tu código de orden es: {orderId}</p>
            </div>
        );
    }


    return (
        <div className="container m-auto mt-10">
            <h2 className="text-4xl font-semibold">Checkout</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
                <input className="border p-2" type="text" placeholder="Nombre" value={values.nombre} onChange={handleInputChange} name="nombre" />
                <input className="border p-2" type="text" placeholder="Direccion" value={values.direccion} onChange={handleInputChange} name="direccion" />
                <input className="border p-2" type="email" placeholder="Email" value={values.email} onChange={handleInputChange} name="email" />
                <button className="bg-blue-400 rounded-mt text-white py-2" type="sumbit">Enviar</button>


            </form>



        </div>
    )
}
export default Checkout