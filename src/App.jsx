import { useState } from "react"
import Papel from './components/Papel';

const App = () => {

    const mida = 5;

    const [color, setColor] = useState('#FF0000');
    const [canvas, setCanvas] = useState(new Array(mida * mida).fill(color));

    function getColorValue() {
        setColor(event.target.value);
    }

    function clickCell(x, y) { }

    function cleanCells() { }



    return (
        <div>
            <h1>Sprites</h1>
            <input type="color" value={color} onChange={() => getColorValue()} />
            <Papel canvas={canvas} mida={mida} />
        </div>
    )
}

export default App
