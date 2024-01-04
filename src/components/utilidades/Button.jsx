
const Button  = ({ children, className = "", onClick }) => {

    return (
    <button
        onClick={onClick}
        className={`bg-blue-500 font-semibold  py-2 px-4 border" ${className}`}
    >
        {children}
    </button>
    );
};

export default Button;
