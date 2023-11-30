import '../productos/productos.css'
const products = [
    {
    id: 1,
    name: 'Inception',
    href: '#',
    price: '$9.99',
    imageSrc: 'src/assets/productsImg/inception.jpg',
    imageAlt: 'Escena de la pelicula Inception.',
    },
    {
    id: 2,
    name: 'The Shawshank Redemption',
    href: '#',
    price: '$12',
    imageSrc: 'src/assets/productsImg/shawshank.jpg',
    imageAlt: 'Escena de la pelicula Shawshank.',
    },
    {
    id: 3,
    name: 'Pulp Fiction',
    href: '#',
    price: '$12',
    imageSrc: 'src/assets/productsImg/pulpFiction.jpg',
    imageAlt: 'Escena de la pelicula Pulp Fiction.',
    },
    {
    id: 4,
    name: 'The Godfather',
    href: '#',
    price: '$8.99',
    imageSrc: 'src/assets/productsImg/godFather.png',
    imageAlt: 'Escena de la pelicula el padrino.',
    },
]

export function Productos() {
    return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

            {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="productsImg h-full w-full object-cover object-center group-hover:opacity-75"
                />
                </div>
                <div className="cardText">
                <h3 className="mt-4 text-xl text-teal-700 font-serif">{product.name}</h3>
                <p className="mt-1 font-medium text-gray-900">{product.price}</p>
                </div>
            </a>
            ))}
        </div>
        </div>
    </div>
    )
}

export default Productos