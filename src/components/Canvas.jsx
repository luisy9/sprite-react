import Celda from './Celda';

const Canvas = ({ c, canvas, mida }) => {

    return (
        <div className='flex justify-center'>
            <div className="grid grid-cols-5">
                {canvas.map((m, index) => <Celda key={index} m={m} />)}
            </div>
        </div>

    )
}

export default Canvas
