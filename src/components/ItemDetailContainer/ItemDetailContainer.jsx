import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
const [loading, setLoading] = useState(true);
const [item, setItem] = useState(null);

const { itemId } = useParams()

useEffect(() => {
    setLoading(true);

    const docRef = doc(db, 'productos', itemId)

    getDoc(docRef)
    .then((docSnapShot) =>{
        const doc = {...docSnapShot.data(), id: docSnapShot.id}

        setItem(doc)
    })
    .finally(() => setLoading(false))

}, []);

return (
    <>
    {loading ? (
        <h2 className="text-center text-4xl mt-8">Cargando...</h2>
    ) : (
        <ItemDetail item={item} />
    )}
    </>
);
}
export default ItemDetailContainer