import React, { useState } from "react";

export default function Nav({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div className='navnar-image'>
                            <img className='w-full' src="images\Vector Smart Object.png" alt="navbar-logo" />
                        </div>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto " >
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
        </>
    );
}