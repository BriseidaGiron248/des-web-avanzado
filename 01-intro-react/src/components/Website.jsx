import React from 'react'
import ilustracion1 from '../assets/img/ilustracion1.svg'

const Website = ({ title, description, butonText, butonLink }) => {
  return (
    <section className='wave-contenedor website'>
      <img src={ilustracion1} alt='' />
      <div className='contenedor-textos-main'>
        <h2 className='titulo left'>{title}</h2>
        <p className='parrafo'>{description}
        </p>
        <a href={butonLink} className='cta'>{butonText}</a>
      </div>
    </section>
  )
}

export default Website
