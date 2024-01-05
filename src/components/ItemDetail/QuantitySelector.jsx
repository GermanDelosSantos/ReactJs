import Button from '../utilidades/Button'

const QuantitySelector = ({ cantidad, stock, setCantidad }) => {
    const handleSumar = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    };

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    return (
        <div className="flex gap-4 items-center">
            <Button
                onClick={handleRestar}
                className={`${cantidad === 1 ? 'bg-red-400' : 'bg-blue-600'} rounded py-2 px-4 text-white font-semibold`}
                disabled={cantidad === 1}
            >
                -
            </Button>

            <span>{cantidad}</span>
            <button
                onClick={handleSumar}
                className={`${cantidad === stock
                    ? `bg-red-400 rounded py-2 px-4 text-white font-semibold`
                    : `bg-blue-600 rounded py-2 px-4 text-white font-semibold`}`
                }
                disabled={cantidad === stock}
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;