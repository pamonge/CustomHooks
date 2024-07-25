import React from 'react'

const IncrementComponent = React.memo(({ increment }) => {

  console.log('Me estoy redibujando')

  return (
    <button type="button" className="btn btn-light" onClick={() => increment(1)} >incrementar +1</button>
  )
}
)

export default IncrementComponent