import React from 'react'
import rocketImage2 from '../assets/rocket2.png';
import { BsRocketTakeoff } from 'react-icons/bs'

const Hero = () => {

    return (
        <header name='nosotros' className={`w-full h-full py-44 bg-no-repeat bg-center bg-cover`} style={{ backgroundImage: `url(${rocketImage2})` }}>
            <div className='max-w-screen-lg max-h-screen mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full text-center'>

                    <h2 className='text-4xl sm:text-7xl font-bold text-[#090318]'>
                        Transforma tu empresa con talentos de la región
                    </h2>
                    <p className='py-4 mx-auto max-w-md text-center text-xl font-bold my-4'>
                        Conectamos a la industria del software con talentos emergentes del interior del país
                    </p>
                    <div>
                        <button className='group text-[#FF230D] w-fit px-6 py-2 my-2 bg-white mx-auto flex items-center rounded-full border-solid border-2 border-[#FF230D] cursor-pointer'>
                            Empecemos
                            <span className='group hover:-rotate-45 duration-300'>
                                <BsRocketTakeoff size={20}
                                    className='ml-2 rotate-45 ' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;