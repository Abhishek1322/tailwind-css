import React from 'react'
import Nav from './Nav';
import './Navbar.css'
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { useState } from 'react';



const Navbar = () => {
    return (
        <>
            <div className="navbar-bg ">
                {/* <Nav /> */}
                <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 lg:px-20">
                    <div className=" flex flex-wrap justify-between items-center mx-auto">
                        <div className='navnar-image'>
                            <img className='w-full' src="images\Vector Smart Object.png" alt="navbar-logo" />
                        </div>
                        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="text-black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>

                        <div className="hidden w-full md:block md:w-auto" id='navbar-default' >
                            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium " >
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-white text-xs bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">HOME</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ABOUT</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">MY PROCESS</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">SERVICES</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">WORK</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-xs text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT</a>
                                </li>

                                <button className="inline-flex items-center bg-lime-500   py-2 px-2  hover:bg-blue-600 hover:text-white  rounded text-xs mt-4 text-white font-bold md:mt-0">Download Now
                                </button>


                            </ul>

                        </div>
                    </div>
                </nav>


                <div className='home-text pt-4 sm:pt-16 md:pt-20 lg:pt-28 lg:px-20 px-4'>
                    <p className='text-xs text-lime-600'>HERE FOR YOU</p>
                    <div className='believe font-bold text-3xl'>
                        I believe in tailoring a
                    </div>
                    <div className="space font-bold text-3xl text-lime-500">
                        space for you to thrive in.
                    </div>
                    <p className='text-xs py-4 font-bold'>Welcome to Pinson Design, a full service design studio located in the San Francisco <br />Bay Area. I offer everything from design consultations to full service design.</p>
                    <div className='quoto-button'>
                        <button className="inline-flex items-center bg-lime-500  py-2 px-2  hover:bg-blue-600 hover:text-white  rounded text-xs mt-4 text-white font-bold md:mt-0">GET A QUICK QUOTE NOW</button>
                    </div>
                </div>
                <div className="social-icons flex lg:px-16 pt-8 gap-4 lg:pt-32 lg:gap-4">
                    <span className="px-1 text-white bg-gray-200 rounded-full text-xl"><FiFacebook /></span>
                    <span className="px-1 text-white bg-gray-200 rounded-full text-xl"><FiTwitter /></span>
                    <span className="px-1 text-white bg-gray-200 rounded-full text-xl"><GrLinkedinOption /></span>
                    <span className="px-1 text-white bg-gray-200 rounded-full text-xl"><FiInstagram /></span>
                </div>

            </div>
        </>
    )
}
export default Navbar