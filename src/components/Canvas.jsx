import Celda from './Celda';

const Canvas = ({ canvas, mida, clickCell }) => {
    console.log(mida)
    return (
        <div className='flex justify-center'>
            <div className={`grid grid-cols-${mida}`}>
                {canvas.map((m, index) => <Celda key={index}
                    canvas={canvas}
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
