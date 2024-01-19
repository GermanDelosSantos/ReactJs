import { useContext, useState, useRef } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import { Link } from "react-router-dom";
// import emailjs from '@emailjs/browser';
import Modal from "./Modal";

const Checkout = () => {
    const { cart, totalCart, clearCart } = useContext(CartContext)
    const form = useRef();
    const [values, setValues] = useState({
        user_name: '',
        user_dir: '',
        user_email: ''
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
            items: cart.map((item) => ({
                name: item.name,
                price: item.price,
                quantity: item.cantidad
            })),
            total: totalCart(),
            fecha: new Date()
        }

        console.log("orden:", orden);

        // const teamplateParams = {
        //     from_name: 'Videos Usados',
        //     user_email: values.user_dir,
        //     user_name: values.user_name,
        //     user_id: orderId,
        //     user_dir: values.user_dir,
        //     user_order: cart.map(item => `${item.name} (${item.cantidad} x $${item.price})`).join(', '),
        // };

        // console.log("teamplateParams:", teamplateParams);

        // emailjs.sendForm('service_o118go3', 'template_w4o7k4o', form.current, 'M7NqcsBEyzAw0i9Je', teamplateParams)
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        const ordersRef = collection(db, 'orders')

        addDoc(ordersRef, orden).then((doc) => {
            setOrderId(doc.id)
            clearCart();
        });
    };



    if (orderId) {
        return (
            <div >
                <h2 className="text-4xl font-semibold">Gracias por tu compra</h2>
                <hr />
                <p>Tu código de orden es: {orderId}</p>
            </div>
        );
    }


    return (
        <>
        <Modal></Modal>
        </>
        // <div className="container m-auto mt-10 ">
        //     <h2 className="text-4xl font-semibold">Checkout</h2>

        //     <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
        //         <input 
        //             className="border p-2" 
        //             type="text"
        //             placeholder="Nombre"
        //             value={values.user_name} 
        //             onChange={handleInputChange} 
        //             name="user_name" />
        //         <input 
        //             className="border p-2"
        //             type="text"
        //             placeholder="Direccion"
        //             value={values.user_dir}
        //             onChange={handleInputChange}
        //             name="user_dir" />
        //         <input
        //             className="border p-2"
        //             placeholder="Email"
        //             value={values.user_email} 
        //             onChange={handleInputChange} 
        //             name="user_email" />
        //         <button className="bg-blue-400 rounded-mt text-white py-2" type="sumbit" value={"send"}>Enviar</button>


        //     </form>

        // <Modal></Modal>

        // </div>
)}
    export default Checkout