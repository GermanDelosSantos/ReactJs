import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

const { categoryId } = useParams()

useEffect(() => {
    setLoading(true)

    const productRef = collection(db, 'productos')
    const q = categoryId ? query( productRef, where( 'category', '==', categoryId) ) : productRef

    getDocs( q )
    .then((querySnapShot)=> {
        const docs = querySnapShot.docs.map(doc => ({...doc.data(), id: doc.id}))

        console.log(docs)
        setProductos( docs )
    })

    .finally( () => setLoading(false))
}, [categoryId])

return (
        <>

        {loading ? (
            <h2 className="text-center text-4xl mt-8">Cargando...</h2>
        ) : (
            <ItemList productos={productos} />
        )}
        </>
);
};

export default ItemListContainer;