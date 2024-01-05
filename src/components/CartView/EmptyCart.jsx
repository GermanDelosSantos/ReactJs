import { Link } from "react-router-dom"
import Button from "../utilidades/Button";

const EmtpyCart = () => {

    return (
        <section className="container m-auto mt-8 bg-gray-200">
        <h2 className="text-4xl font-semibold">Tu carrito está vacío</h2>
        <hr />
        <p>Agrega algún producto a tu carrito</p>
        <Button className="m-5 text-white rounded-md">
        <Link to={"/"}>Volver</Link>
        </Button>
    </section>
    )
}

export default EmtpyCart