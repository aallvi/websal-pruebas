import React from 'react'

export const GreyLabel = ({primerDato,segundoDato}) => {
  return (
    <div className='greyLabel'>
         <p className='texto' >{primerDato} </p>
         <p className='textoDos' >{segundoDato}</p>
        

        </div>
  )
}
