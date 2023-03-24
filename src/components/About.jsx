import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <div name='about' className='w-full text-black bg-white mt-8'>

        <div className='py-auto bg-white'>
         <div className='p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='py-4'>
                <p className='text-4xl font-bold inline'>Partner tecnológico</p>
            </div>
            <p className='text-2xl mt-8'>
                Somos <span className='font-bold'>Raise</span>, una startup tecnológica, tenemos como misión formar talentos en tecnología, enfocados en capacitar a personas del interior, más especificamente del Norte del país, y conectarlos con empresas de tecnología que buscan perfiles técnicos altamente capacitados
            </p>
            <br />
            <p className='text-2xl'>
            Nuestra visión es ser el principal socio tecnológico de emprendedores, organizaciones y empresas, impulsar su crecimiento a través de soluciones de software de calidad, a medida que formamos e involucramos en proyectos reales a los futuros talentos de la industria   
            </p>
            <img src={about} alt="about-img" className='md:px-60 py-24'/>
        </div>   
        </div>
    </div>
  )
}

export default About;