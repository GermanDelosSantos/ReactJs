import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"

const Modal = () => {
    const [showModal, setShowModal] = useState(true);

    const { cart, totalCart, clearCart } = useContext(CartContext)
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
        setShowModal(false)
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
                    <button className="rounded-md bg-gray-300 hover:bg-blue-500 hover:text-white w-1/6 p-3 m-4 text-lg font-semibold">
                    <Link to="/">Inicio</Link></button>
            </div>
        );
    }


    return (
        <div>
            {showModal ? (
                <div tabIndex="-1" aria-hidden="true" className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full inset-0 overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-75">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Checkout
                                </h3>
                                <button
                                    type="button"
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="authentication-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-4 md:p-5">
                                <form onSubmit={handleSubmit} className="space-y-4" action="#">
                                    <div>
                                        <input
                                            className="border p-2"
                                            type="text"
                                            placeholder="Nombre"
                                            value={values.user_name}
                                            onChange={handleInputChange}
                                            name="user_name"
                                        />
                                        <input
                                            className="border p-2"
                                            type="text"
                                            placeholder="Direccion"
                                            value={values.user_dir}
                                            onChange={handleInputChange}
                                            name="user_dir"
                                        />
                                        <input
                                            className="border p-2"
                                            placeholder="Email"
                                            value={values.user_email}
                                            onChange={handleInputChange}
                                            name="user_email"
                                        />
                                        {/* Resto de los campos de entrada */}
                                    </div>
                                    {/* Otros campos y contenido del formulario */}
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (null
                // <div>
                //     <h2>Volver al inicio</h2>
                //     <button className="rounded-md bg-gray-300 hover:bg-blue-500 hover:text-white">
                //         <Link to="/">Inicio</Link>
                //     </button>
                // </div>
            )}
        </div>
    );
    };
    export default Modal