import React, { useState, useMemo } from 'react'

const CalculoPesadoApp = () => {

  const [ show, setShow] = useState(true)
  const [ numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9])

  const getCalculo = (numList) => {
    console.log('Calculando...')
    return numList.reduce((a,b) => a*b )
  }

  const addNumber = () => {
    setNumList([...numList, numList[numList.length - 1 ] + 1])
  }

  const memorizedValue = useMemo(() => getCalculo(numList), [numList])

  return (
    <>
      <h2>Calculos</h2>
      <h4>El calculo es: { memorizedValue }</h4>
      {show && <p>texto que se muestra y oculta</p>}

      <button type="button" className="btn btn-primary" onClick={() => setShow(!show)}>{show ? 'Ocultar Calculo' : 'Mostrar Calculo'}</button>
      <button type="button" className="btn btn-secondary" onClick={() => addNumber()} >Agregar mas numeros</button>
    </>
    
  )
}

export default CalculoPesadoApp