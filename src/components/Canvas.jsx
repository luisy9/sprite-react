import Celda from './Celda';

const Canvas = ({ canvas, mida, clickCell }) => {

    return (
        <div className='flex justify-center'>
            <div className="grid grid-cols-10">
                {canvas.map((m, index) => <Celda key={index}
                    x={index}
                    m={m}
                    mida={mida}
                    clickCell={clickCell} />
                )}
            </div>
        </div>

    )
}

export default Canvas
