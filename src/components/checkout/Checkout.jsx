import { useContext, useState, useRef } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc } from "firebase/firestore"
import Modal from "./Modal";

const Checkout = () => {

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