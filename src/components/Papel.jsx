import Canvas from './Canvas';

const Papel = ({ canvas, mida }) => {
  
  return (
    <div>
      <h1>Este es el papel</h1>
      <div className=''>
        <Canvas canvas={canvas} />
      </div>
    </div>
  )
}

export default Papel
