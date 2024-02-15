const Celda = ({ clickCell, m, x, mida, canvas }) => {

  return (
    <div className="w-10 h-10 cursor-pointer 
    border-2 border-solid" style={{ backgroundColor: m }}
      onMouseEnter={() => clickCell(x)}></div>
  )
}

export default Celda
