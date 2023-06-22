import React from 'react'

const Cajas = ({ titlecaja, correo, button1, descorreo, kardex, button2, deskardex, contactos, button3, descontacto }) => {
  return (
    <section className='cards contenedor'>
      <h2 className='titulo'>{titlecaja}</h2>
      <div className='content-cards'>
        <article className='card'>
          <i className='far fa-clone' />
          <h3>{correo}</h3>
          <p>{descorreo}</p>
          <a href={button1} className='cta'>picale aqui</a>
        </article>
        <article className='card'>
          <i className='fas fa-database' />
          <h3>{kardex}</h3>
          <p>{deskardex}</p>
          <a href='' className='cta'>Learn more</a>
        </article>
        <article className='card'>
          <i className='far fa-object-group' />
          <h3>{contactos}</h3>
          <p>{descontacto}</p>
          <a href='' className='cta'>Learn more</a>
        </article>
      </div>
    </section>
  )
}

export default Cajas
