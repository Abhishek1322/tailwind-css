import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { TiSocialInstagram } from 'react-icons/ti';
import { CgMail } from 'react-icons/cg';
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';



const Footer = () => {
    return (
        <>
            <div className='footer  bg-black'>
                <div className='container'>
                    <div className='footer-logo inline-block'>
                        <img className='pt-4' src="images\Vector Smart Object2.png" alt="footer-img" />
                    </div>
                    <div className='footer-icons flex lg:float-right md:float-right sm:float-right py-8  gap-2'>
                        <span className='facebook bg-slate-700 text-white px-2 py-2'><FiFacebook /></span>
                        <span className='twitter bg-slate-700 text-white px-2 py-2'><BsTwitter /></span>
                        <span className='youtube bg-slate-700 text-white px-2 py-2'><BsYoutube /></span>
                        <span className='instagram bg-slate-700 text-white px-2 py-2'><TiSocialInstagram /></span>
                        <span className='gmail bg-slate-700 text-white px-2 py-2'><CgMail /></span>
                    </div>
                </div>
                <div className='footer-content container'>
                    <footer className="text-white body-font">
                        <div className="container px-5 lg:py-6 mx-auto grid">

                            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                                <div className="sm:px-8 sm:pb-4">
                                    <h1 className='text-white'>About us</h1>
                                    <p className="mt-2 text-sm text-gray-400">Sweeping coastlines with endless skies. Peaceful, airy ocean retreats that perfectly compliment the hush of towering redwoods. </p>
                                </div>
                                <div className=" sm:px-4">
                                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Useful links</h2>
                                    <nav className="list-none mb-10 text-sm">
                                        <li>
                                            <a className="text-gray-400 hover:text-white">HOME</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-400 hover:text-white">ABOUT</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-400 hover:text-white">MY PROGRESS</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-400 hover:text-white">SERVICES</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-400 hover:text-white">WORK</a>
                                        </li>
                                    </nav>
                                </div>
                                <div className=" lg:px-4 sm:pl-10">
                                    <h2 className="title-font font-medium text-white  text-sm mb-3">Help & Support</h2>
                                    <nav className="list-none mb-10 text-sm">
                                        <li>
                                            <a className="text-gray-400 hover:text-white">Login</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-400 hover:text-white">My account</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-400 hover:text-white">Subscribe</a>
                                        </li>
                                        <li>
                                            <a className="text-gray-400 hover:text-white">Contact</a>
                                        </li>
                                    </nav>
                                </div>
                                <div className="sm:px-4">
                                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Get in touch</h2>
                                    <div className="footer-address mb-10 text-gray-400">
                                        <div className=' location flex text-2xl pl-2'><MdLocationOn /><span className='text-xs px-2'>San Francisco Bay + Anywhere Virtually</span></div>
                                        <div className='phone flex text-xs pl-3'><BsTelephoneFill /><span className='text-xs px-3'> 02394 212912</span></div>
                                        <div className='phone flex pl-3'><MdOutlineEmail /><span className='text-xs px-3'>mk@mkpinsondesign.com</span></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p className='text-gray-400 text-center text-xs py-3'>Copyright © 2022  Professional Contractor Mortgages. All rights reserved.</p>
                    </footer>
                </div>
            </div>

        </>
    )
}

export default Footer