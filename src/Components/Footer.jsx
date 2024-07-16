import React from 'react';
import {
    FaFacebook,
    FaLinkedin,
    FaWhatsapp,
    FaEnvelope
} from 'react-icons/fa'
import Button from './/IconButton'

const Footer = () => {
    return (
        <div className="max-w-[100%] py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-black">
            <div>
                <h1 className='w-full text-3xl font-bold'>DLQF</h1>
                <p className="py-4">ewfwefqeff fwfkwjw rjnfwfkj JWLnrwkf ernjreknfa;/ rjkefg ragkl vlrfgrwjfg gnkrwg jkw fkgv wslksnwf wjka gvrj</p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaEnvelope size={30} />
                    <FaWhatsapp size={30} />
                    <FaFacebook size={30} />
                    <FaLinkedin size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <ul>
                    <li className='py-2 text-sm'>Home</li>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Research</li>
                    <li className='py-2 text-sm'>Projects</li>
                    <li className='py-2 text-sm'>People</li>
                    <li className='py-2 text-sm'>Contact</li>
                </ul>

            </div>
        </div>
    )
}

export default Footer;

