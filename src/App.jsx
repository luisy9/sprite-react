import { useState } from "react"
import Papel from './components/Papel';

const App = () => {

    const mida = 10;

    const [color, setColor] = useState('#ff0000');
    const [canvas, setCanvas] = useState(new Array(mida * mida).fill(color));

    function getColorValue() {
        setColor(event.target.value);
    }

    function clickCell(x) {
        //Quiero hacerlo mandandoles solo la posicion de el array que toca modificar
        
        //Le vuelvo a mandar un nuevo array
        setCanvas(canvas.map((c, index) => {
            if (x === index) {
                return color;
            }
            return c
        }))
    }

    function cleanCells() {
        setCanvas(canvas.map(e => '#ff0000'));
    }



    return (
        <div>
            <h1>Sprites</h1>
            <input type="color" value={color} onChange={() => getColorValue()} />
            <button onClick={() => cleanCells()}>Clear</button>
            <Papel canvas={canvas} mida={mida} clickCell={clickCell} />
        </div>
    )
}

export default App
