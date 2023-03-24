import React from 'react';
import person from '../assets/person.png';
import gear from '../assets/gear.png';
import stars from '../assets/stars.png';
import hat from '../assets/hat.png';

const Services = () => {

    const servicios = [
        {
            id: 1,
            nombre: "Development",
            descripcion: "Desarrollo de productos digitales personalizados para emprendedores, organizaciones y empresas",
            img: gear 
        },
        {
            id: 2,
            nombre: "Training",
            descripcion: "Capacitaciones en tecnología, incluyendo Desarrollo FullStack y Testing de Software",
            img: hat 
        },
        {
            id: 3,
            nombre: "Tech Talent",
            descripcion: "Talentos en tecnología que adquieren experiencia real en el campo a través de trabajos y proyectos",
            img: stars 
        },
        {
            id: 4,
            nombre: "Staff Augmentation",
            descripcion: "Talentos emergentes que trabajan para empresas con el apoyo constante de un perfil con mayor seniority",
            img: person
        }
    ]

    return (
        <div name='servicios' className='w-full text-black bg-white md:my-28'>
            <div className='my-20 md:my-18 bg-white'>
                <div className='p-4 mx-auto flex flex-col justify-center w-full h-full text-center'>
                    <h2 className='text-4xl font-bold'>Nuestros servicios</h2>
                    <p className='text-2xl mt-8'>Contamos con el apoyo de grandes empresas que colaboran en la revisión y evaluación de nuestros proyectos, acompañan a nuestros equipos para garantizar que el trabajo entregado es de calidad, seguro y escalable.</p>
                </div>
            
                <div className='w-full text-black bg-white mx-auto'>
                    <ul className='grid sm:grid-cols-1 sm:grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-4 sm:mt-16 md:mt-18'>
                        {servicios.map(({ id, nombre, descripcion, img }) => (
                            <li key={id} className='flex flex-row px-4 py-4 items-center hover:scale-105 duration-150'>
                                <div>
                                    <img src={img} alt="" />
                                </div>
                                <div className='flex flex-col'>
                                    <h3 className='text-2xl font-bold'>{nombre}</h3>
                                    <p className='text-2xl'>{descripcion}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services;