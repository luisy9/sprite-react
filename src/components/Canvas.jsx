import Celda from './Celda';

const Canvas = ({ canvas, mida, segundoBucle }) => {

    return (
        <div className="">
            {segundoBucle.map((m, index) => <Celda key={index} m={m} />)}
        </div>
    )
}

export default Canvas
