import React from 'react'

const Content = ({ dato, parrafo }) => {
  return (
    <section className='info'>
      <div className='contenedor'>
        <h2 className='titulo left'>{dato}</h2>
        <p>{parrafo}</p>
      </div>
    </section>
  )
}

export default Content
