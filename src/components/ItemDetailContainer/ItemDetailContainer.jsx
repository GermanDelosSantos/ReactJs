import { useEffect, useState } from "react";
import { pedirDatos } from "../utilidades/utilidades";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
const [loading, setLoading] = useState(true);
const [item, setItem] = useState(null);

const { itemId } = useParams()

useEffect(() => {
    setLoading(true);

    pedirDatos()
    .then((data) => {
        setItem( data.find(prod => prod.id === Number(itemId)) )
    })
    .finally(() => setLoading(false));
}, []);

return (
    <>
    {loading ? (
        <h2 className="text-center text-4xl mt-8">Cargando...</h2>
    ) : (
        <ItemList productos={productos} />
    )}
    </>
);
}
export default ItemDetailContainer