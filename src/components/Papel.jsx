import Canvas from './Canvas';

const Papel = ({ canvas, mida, clickCell }) => {
  
  return (
    <div>
      <h1>Este es el papel</h1>
      <div className=''>
        <Canvas canvas={canvas} clickCell={clickCell} />
      </div>
    </div>
  )
}

export default Papel
