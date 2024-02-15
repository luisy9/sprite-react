import Canvas from './Canvas';

const Papel = ({ canvas, mida }) => {
  const primerBucle = canvas.slice(0, 5);
  const segundoBucle = canvas.slice(5, 10);
  
  return (
    <div>
      <h1>Este es el papel</h1>
      <div className=''>
        {
          primerBucle.map((c, index) => <Canvas canvas={canvas} mida={mida} key={index} segundoBucle={segundoBucle} />)
        }
      </div>
    </div>
  )
}

export default Papel
