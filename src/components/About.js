import React from 'react'
import { CgTime } from 'react-icons/cg';
import { TiContacts } from 'react-icons/ti';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { TbCurrencyDollar } from 'react-icons/tb';
import { BiCar } from 'react-icons/bi';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';


const About = () => {
    return (
        <>
            <div className='container'>
                <div className='about-icons gap-4 grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-8  py-8 '>
                    <div className='time-icon'>
                        <div className='time  flex'>
                            <span className='bg-lime-500 text-white inline-block rounded-full px-2 text-3xl  py-2'><CgTime /></span>
                            <div className='px-4 leading-3 text-xs inline-block font-bold text-gray-700'>Mon-Thur: 9.00am – 7.00pm <br /> Friday: 9.00am – 5.30pm</div>
                        </div>
                    </div>

                    <div className='contact-icons'>
                        <div className='contact  flex'>
                            <span className='bg-lime-500 text-white inline-block rounded-full px-2 text-3xl py-2'><TiContacts /></span>
                            <div className='px-4 leading-5 text-xs font-bold text-gray-700'>Contact us <br /> mk@mkpinsondesign.com</div>
                        </div>
                    </div>

                    <div className='phone-icons'>
                        <div className='phone  flex'>
                            <span className='bg-lime-500 text-white inline-block rounded-full px-2 text-3xl py-2'><MdOutlinePhoneInTalk /></span>
                            <div className='px-4 leading-5 text-xs font-bold text-gray-700'>Phone Us  <br /> 02394 212912 </div>
                        </div>
                    </div>

                    <div className='world-icons'>
                        <div className='world  flex'>
                            <span className='bg-lime-500 text-white inline-block rounded-full px-2 text-3xl py-2'><BiWorld /></span>
                            <div className='px-4 leading-5 text-xs font-bold text-gray-700'>San Francisco Bay Area<br />+ Anywhere Virtually</div>
                        </div>
                    </div>
                </div>
                <div className='about-us grid grid-rows-1 md:grid-rows-1 lg:grid-cols-2 '>
                    <div className='woman-img'>
                        <img className='py-3 w-full px-8' src="images\Shape 3 copy.png" alt="woman" />
                    </div>
                    <div className='about-text px-14 lg:py-14'>
                        <p className='text-xs text-lime-600 font-bold'>ABOUT US</p>
                        <h1 className='font-bold text-4xl py-2'>Hi. I'm Kaitlyn.</h1>
                        <p className='py-3 font-medium text-xs'>I have always been drawn to the elements that make a space special.</p>
                        <p className='py-3  font-medium text-xs'>I walk into rooms and envision colors, textures and patterns. How would I paint this room and arrange the furniture? How could I incorporate and elevate the existing elements of this space?</p>
                        <p className='py-4 font-medium text-xs'>Design flows through all aspects of my daily experience. It shapes my being, guides me, and influences my thoughts and actions. Interior design is my chosen medium. I believe that design is not always about the end result, but about the process and creation of beautiful spaces </p>
                    </div>
                </div>
            </div>
            <div className=' work-together grid grid-rows-1 lg:grid-cols-2'>
                <div className='work-text bg-black grid px-16 lg:px-44 lg:py-0  xl:px-14 xl:py-12 xl:px-44'>
                    <h1 className='text-white font-medium text-3xl'>Let's Work Together</h1>
                    <p className='text-white font-medium text-xs'>Together, we will work to create a welcoming environment where you can connect to the sweetness of your life.</p>
                    <div className='read-more py-5'>
                        <button className="inline-flex items-center bg-lime-500  py-2 px-2  hover:bg-blue-600 hover:text-white  rounded text-xs mt-4 text-white font-bold md:mt-0">Read More</button>
                    </div>
                </div>
                <div className='work-img'>
                    <img className='w-full' src="images\Pinson Design Website (1).png" alt="home" />
                </div>
            </div>

            <div className='container grid grid-rows-1 md:grid-cols-2 '>
                <div className='house-text py-4 md:py-20 lg:py-28'>
                    <h1 className='font-bold text-3xl'>Feeling Inspired?</h1>
                    <p className='font-medium text-xs md:py-12 lg:py-12'>Looking to finally complete that renovation project or simply want to<br />
                        freshen things up? Find out what additional borrowing options
                        without affecting your current mortgage rates.</p>
                    <div className='get-free  md:py-2 lg:py-4'>
                        <button className="inline-flex items-center bg-lime-500  py-2 px-2  hover:bg-blue-600 hover:text-white  rounded text-xs mt-4 text-white font-bold md:mt-0">GET FREE QOUTO</button>
                    </div>
                </div>
                <div className='houses-img md:py-8 lg:py-16'>
                    <img className='' src="images\Layer 22.png" alt="home" />
                </div>

            </div>

            {/* 
            <div className='bg-sky-700 '>
                <div className='text-center py-8'>
                    <p className='text-xs text-white font-medium'>PARTNER DIRECTORY</p>
                    <h1 className='text-4xl  text-white font-medium'>FEATURE PROPERTY</h1>
                </div>
                <div className='property-card container'>
                    <div className='property-text bg-white  p-24  w-2/4 float-left'>
                        <p className='text-xs text-lime-600 font-bold'>TOP PROPERTY</p>
                        <h1 className='font-medium text-2xl py-2'>Dream villa Arabia, Hurghada</h1>
                        <div className='for-sale flex flex-row '>
                            <span className='text-xs py-1 bg-red-500 px-2 text-white font-bold rounded-r-full'>FOR SALE </span>
                            <div className='px-2 text-gray-400'>Start from:</div>
                            <div className='py-1 font-bold text-lime-500'><TbCurrencyDollar /></div>
                            <span className='font-bold text-lime-500'>560.0</span>
                        </div>
                        <p className='text-gray-600 py-3.5 text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at <br />auctor, porttitor eros nec, varius enim, nascetur ridiculus mus.</p>
                        <div className="car-num flex space-between">
                            <p className='font-bold mx-6'>2,283<span className='text-gray-400 font-medium'> Sq Ft</span></p>
                            <div className='parking flex pl-8'>
                                <span className="text-4xl text-lime-500"><BiCar /></span>
                                <p className='font-bold p-2'> 01 <span className='text-gray-400 font-medium'>Parking</span></p>
                            </div>
                        </div>
                        <div className='bed-bath flex space-between'>
                            <div className='bedroom flex'>
                                <span className="text-4xl text-lime-500"><FaBed /></span>
                                <p className='font-bold p-2'> 03 <span className='text-gray-400 font-medium'>Bedroom</span></p>
                            </div>
                            <div className='bathroom flex'>
                                <span className="text-4xl text-lime-500 pl-4"><FaBath /></span>
                                <p className='font-bold p-2'> 05 <span className='text-gray-400 font-medium'>Bathroom</span></p>
                            </div>
                        </div>

                    </div>
                    <div className='property-img w-2/4 float-left pb-16'>
                        <img className='w-full' src="images\Layer 18.png" alt="property" />
                    </div>
                </div>
            </div> */}

        </>
    )
}

export default About