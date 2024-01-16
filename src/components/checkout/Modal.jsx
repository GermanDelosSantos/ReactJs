// import React from 'react';

// const Modal = ({ isOpen, openModal, closeModal, handleSubmit, handleInputChange }) => {

//         // const handleSubmit = (e) => {
//         //     e.preventDefault();
        
//         //     const orden = {
//         //         cliente: values,
//         //         items: cart.map((item) => ({
//         //             name: item.name,
//         //             price: item.price,
//         //             quantity: item.cantidad
//         //         })),
//         //         total: totalCart(),
//         //         fecha: new Date()
//         //     }
        
//         //     console.log("orden:", orden);
        
//         //     const teamplateParams = {
//         //         from_name: 'Videos Usados',
//         //         user_email: values.user_dir,
//         //         user_name: values.user_name,
//         //         user_id: orderId,
//         //         user_dir: values.user_dir,
//         //         user_order: cart.map(item => `${item.name} (${item.cantidad} x $${item.price})`).join(', '),
//         //     };
        
//     //         console.log("teamplateParams:", teamplateParams);
        
//     //         emailjs.sendForm('service_o118go3', 'template_w4o7k4o', form.current ,'M7NqcsBEyzAw0i9Je', teamplateParams)
//     //             .then((result) => {
//     //                 console.log(result.text);
//     //             }, (error) => {
//     //                 console.log(error.text);
//     //             });
        
//     //         const ordersRef = collection(db, 'orders')
        
//     //         addDoc(ordersRef, orden).then((doc) => {
//     //             setOrderId(doc.id)
//     //             clearCart();
//     //         });
//     //     closeModal();
//     };

//     return (
//         <div>
//             {/* Renderiza el modal solo si isOpen es true */}
//             {isOpen && (
//                 <div className="modal-overlay">
//                     <div className="modal-content">
//                         <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
//                             <h2 className="text-4xl font-semibold">CheckOut</h2>
//                             <p>Ingresa tus datos</p>
//                             <label>Name</label>
//                             <input type="text" name="user_name" onChange={handleInputChange} className="border p-2"/>
//                             <label>Dirección</label>
//                             <input type="text" name="user_dir" onChange={handleInputChange} className="border p-2"/>
//                             <label>Email</label>
//                             <input type="email" name="user_email" onChange={handleInputChange} className="border p-2"/>
//                             <label>Message</label>
//                             <textarea name="message" />
//                             <div className="modal-buttons">
//                                 <button type="submit" className="bg-blue-400 rounded-mt text-white py-2 rounded-md">Send</button>
//                                 <button onClick={closeModal} className='bg-red-400 text-black py-2 rounded-md'>Close</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// ;

// export default Modal;