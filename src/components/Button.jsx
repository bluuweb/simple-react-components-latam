//desestructuración      //rest operator
const Button = ({ children, ...props }) => {
    return (
        <>
            {/* spread operator */}
            <button {...props}>{children}</button>
        </>
    );
};

export default Button;
