import { useState } from "react"
import Celda from "./components/Celda";

const App = () => {

    const size = 10;

    const [color, setColor] = useState('bg-green-200');
    const [canvas, setCanvas] = useState();

    return (
        <div>
            {
                
            }
            <Celda size={canvas} />
        </div>
    )
}

export default App
