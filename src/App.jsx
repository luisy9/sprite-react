import { useState } from "react"
import Papel from './components/Papel';

const App = () => {

    const mida = 5;

    const [color, setColor] = useState('#FF0000');
    const [canvas, setCanvas] = useState(new Array(mida * mida).fill(color));

    return (
        <div>
            <h1>Sprites</h1>
            <Papel canvas={canvas} mida={mida} />
        </div>
    )
}

export default App
