import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

    return (
        <section className="container m-auto mt-8 bg-gray-200 p-6">
        <h2 className="text-4xl font-bold m-6">Productos</h2>
        <hr />
        <div className="flex flex-wrap justify-between gap-10 items-center rounded-md">
            {productos.map((item) => <ItemCard key={item.id} item={item} />)}
        </div>
        </section>
    );
};
export default ItemList;