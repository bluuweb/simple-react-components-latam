import { useState } from "react";
import Button from "./components/Button";

const App = () => {
    const [counter, setCounter] = useState(0);

    const handleClickIncrement = () => {
        setCounter(counter + 1);
    };

    const handleClickDecrement = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h1>App</h1>
            {/* <Button
                onClick={handleClickIncrement}
                text="Increment"
                className="btn btn-primary"
            />
            <Button
                onClick={handleClickDecrement}
                text="Decrement"
                className="btn btn-danger"
            /> */}

            {/* patrones de diseño */}
            <Button
                onClick={handleClickIncrement}
                text="Increment"
                className="btn btn-primary"
            >
                <i>icono</i>
                <span>Increment</span>
            </Button>
            <h2>{counter}</h2>
        </>
    );
};

export default App;
