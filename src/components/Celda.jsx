const Celda = ({ clickCell, m, x, mida, canvas }) => {

  const color = canvas[m];

  console.log(color)

  return (
    <div className="w-10 h-10 cursor-pointer 
    border-2 border-solid" style={{ backgroundColor: m }}
      onClick={() => clickCell(x)}></div>
  )
}

export default Celda
