import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs'

const Banner = () => {

    const checks = [
        {
            id: 1,
            texto: "Capacitación y acompañamiento a medida",
            icono: <BsCheck2Circle className='text-white text-2xl' />
        },
        {
            id: 2,
            texto: "Comunidad de talentos emergentes",
            icono: <BsCheck2Circle className='text-white text-2xl' />
        },
        {
            id: 3,
            texto: "Solución integral en tercerización de personal",
            icono: <BsCheck2Circle className='text-white text-2xl' />
        }
    ]

    return (<div name='comunidad' className='flex flex-col w-full h-full bg-gradient-to-b from-[#E44D2E] to-[#EE204D] pt-32 md:mt-8 md:pt-24 my-auto items-center justify-center'>
    <div className='flex flex-col mx-10 pt-24 items-center'>
        <h3 className='text-white font-bold text-4xl text-center sm:mx-4 sm:px-2'>
            ¡Unite a nosotros en nuestra misión de cerrar la brecha de habilidades en tecnología en el interior del país!
        </h3>
        <button className='bg-white text-[#FF230D] px-8 py-2 rounded-md mt-10 hover:scale-105 duration-150'>
            Contactanos
        </button>
    </div>
    <div className='pt-14 sm:mx-2 mx-18 text-center mb-10'>
        <ul className='flex flex-col sm:flex-row sm:justify-center sm:items-center pl-18 px-6 text-white'>
            {checks.map(({ id, texto, icono }) => (
                <li key={id} className='mx-8 flex flex-row items-center justify-center sm:my-2'>
                    {icono}
                    <p className='ml-2'>{texto}</p>
                </li>
            ))}
        </ul>
    </div>
</div>
    )
}

export default Banner;