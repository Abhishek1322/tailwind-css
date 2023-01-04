import React from 'react'
import { RiContactsLine } from 'react-icons/ri';
import { FaFacebookF } from 'react-icons/fa';
import { TbBrandTwitter } from 'react-icons/tb';
import { CgMail } from 'react-icons/cg';


const Services = () => {
    return (
        <>
            <div className='services-bg bg-gray-200'>
                <div className='container'>
                    <div className='text-center py-4 lg:py-8'>
                        <p className="text-lime-600 text-sm font-medium">ALWAYS SATISFIED</p>
                        <h1 className="text-3xl font-bold">SERVICES</h1>
                    </div>
                    <div className='services-content grid grid-rows-1 sm:grid-rows-1 md:grid-cols-3 lg:grid-cols-3'>
                        <div className='money  lg:p-12 p-4 text-center'>
                            <div className='money-img px-8 md:px-0 inline-block'>
                                <img className='sm:text-center' src="images\Forma 1.png " alt="money" />
                            </div>
                            <h1 className='text-sm font-bold py-2'>Color & Wallpaper Consultation</h1>
                            <p className='text-xs text-gray-400 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing.<br /> Sed at nisi auctor nascetur ridiculus mus.</p>
                        </div>

                        <div className='design   lg:p-12 p-4 text-center'>
                            <div className='design-img px-16 md:px-0 inline-block'>
                                <img src="images\ezgif.com-gif-maker (18).png" alt="money" />
                            </div>
                            <h1 className='text-sm font-bold py-2  md:pl-0 '>Interior Design</h1>
                            <p className='text-xs text-gray-400 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing.<br /> Sed at nisi auctor nascetur ridiculus mus.</p>
                        </div>


                        <div className='room  lg:p-12 p-4 text-center'>
                            <div className='room-img px-8 md:px-0 inline-block'>
                                <img src="images\kaitlynpinson-04.png" alt="money" />
                            </div>
                            <h1 className='text-sm font-bold px-8 py-2 md:px-0'>Room by Room</h1>
                            <p className='text-xs text-gray-400 font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing.<br /> Sed at nisi auctor nascetur ridiculus mus.</p>
                        </div>

                    </div>



                    <div className='view-all text-center pb-8'>
                        <button className="border-lime-500 border-solid border-2 text-xs py-1.5 font-medium px-16 hover:bg-gray-500  hover:text-white">VIEW ALL</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='text-center py-8 lg:py-12'>
                    <p className="text-lime-600 text-sm font-medium">HOW WE CAN HELP  YOU</p>
                    <h1 className="text-3xl font-bold">WORK</h1>
                </div>
                <div className='help-images'>
                    <div className='box1 flex gap-4'>
                        <div className='work-image'>
                            <img src="images\38 Properties.png" alt="work" />
                        </div>
                        <div className='material-image'>
                            <img src="images\38 Properties (1).png" alt="material" />
                        </div>
                    </div>
                    <div className='box-2 flex gap-4 py-4 pb-12 '>
                        <div className='master-image'>
                            <img src=" images\38 Properties (2).png" alt="master" />
                        </div>
                        <div className='kitchen-image'>
                            <img src="images\38 Properties (3).png" alt="kitchen" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='bg-cards  bg-gray-200 w-full'>
                <div className='container cards-center'>
                    <div className='our-team lg:inline-block text-center lg:py-8'>
                        <p className="text-lime-600 text-sm font-medium">OUR TEAM</p>
                        <h1 className="text-3xl font-bold ">OUR COUNSELOR</h1>
                    </div>
                    <div className='all-counselor lg:float-right   xl-float-right lg:py-12 py-4 sm:px-44 md:px-60 lg:px-0 xl:px-0 px-12'>
                        <button className="border-lime-500  border-solid border-2 text-xs py-1.5 font-medium px-12 hover:bg-gray-500  hover:text-white flex"><span className='px-2'><RiContactsLine /></span> ALL COUNSELOR</button>
                    </div>

                    <div className='service-cards grid grid-rows-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center w-full '>
                        <div className='first-card py-4 lg:py-12'>
                            <div className="border-solid border-2  inline-block bg-white ">
                                <img className="px-8 py-4" src="images\Img.png" alt="Sunset in the mountains" />
                                <div className="first-card-text uppercase">
                                    <div className="font-bold text-base text-center">Ashton Kutcher</div>
                                    <p className="text-lime-500 text-sm text-center py-2">Founder & CEO</p>
                                    <div className='number inline-block'>
                                        <p className='bg-lime-500 px-2 py-1 text-white'>123-455-688</p>
                                    </div>
                                    <div className='card-icons float-right flex text-white bg-black w-1/2 py-2'>
                                        <span className='px-2'><FaFacebookF /></span>
                                        <span className='px-2'><TbBrandTwitter /></span>
                                        <span className='px-2'><CgMail /></span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='second-card py-4 lg:py-12'>
                            <div className="border-solid border-2 bg-white inline-block ">
                                <img className="px-8 py-4" src="images\Img.png" alt="Sunset in the mountains" />
                                <div className="second-card-text uppercase">
                                    <div className="font-bold text-base text-center">Cara Delevingne</div>
                                    <p className="text-lime-500 text-sm text-center py-2">Founder & CEO</p>
                                    <div className='number inline-block'>
                                        <p className='bg-lime-500 px-2 py-1 text-white'>123-455-688</p>
                                    </div>
                                    <div className='card-icons float-right flex text-white bg-black w-1/2 py-2'>
                                        <span className='px-2'><FaFacebookF /></span>
                                        <span className='px-2'><TbBrandTwitter /></span>
                                        <span className='px-2'><CgMail /></span>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='third-card py-4 lg:py-12'>
                            <div className="border-solid border-2 bg-white inline-block ">
                                <img className="px-8 py-4" src="images\Img.png" alt="Sunset in the mountains" />
                                <div className="third-card-text uppercase">
                                    <div className="font-bold text-base text-center">James Marsden</div>
                                    <p className="text-lime-500 text-sm text-center py-2">Founder & CEO</p>
                                    <div className='number inline-block'>
                                        <p className='bg-lime-500 px-2 py-1 text-white'>123-455-688</p>
                                    </div>
                                    <div className='card-icons float-right flex text-white bg-black w-1/2 py-2'>
                                        <span className='px-2'><FaFacebookF /></span>
                                        <span className='px-2'><TbBrandTwitter /></span>
                                        <span className='px-2'><CgMail /></span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='fourth-card py-4 lg:py-12'>
                            <div className="border-solid border-2 bg-white inline-block ">
                                <img className="px-8 py-4" src="images\Img.png" alt="Sunset in the mountains" />
                                <div className="fourth-card-text uppercase">
                                    <div className="font-bold text-base text-center">Cameron Diaz</div>
                                    <p className="text-lime-500 text-sm text-center py-2">Founder & CEO</p>
                                    <div className='number inline-block'>
                                        <p className='bg-lime-500 px-2 py-1 text-white'>123-455-688</p>
                                    </div>
                                    <div className='card-icons float-right flex text-white bg-black w-1/2 py-2'>
                                        <span className='px-2'><FaFacebookF /></span>
                                        <span className='px-2'><TbBrandTwitter /></span>
                                        <span className='px-2'><CgMail /></span>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>

            <div className='container'>
                <div className='text-center py-12'>
                    <p className="text-lime-600 text-sm font-medium uppercase">All about latest update</p>
                    <h1 className="text-3xl font-bold uppercase">All the latest news and events</h1>
                </div>
                <div className='event-images flex gap-2'>
                    <div className='bank'>
                        <img src="images\12 Comment.png" alt="bank" />
                    </div>

                    <div className='men'>
                        <img src="images\Jan 09, 2022.png" alt="men" />
                    </div>
                    <div className='girl'>
                        <img src="images\Jan 09, 2019.png" alt="girl" />
                    </div>


                </div>
                <div className='company-images py-4'>
                    <img className='w-full' src="images\Layer 26.png" alt="companies" />
                </div>

            </div>
            <div className='input-bg bg-slate-700 '>
                <div className='container py-8'>
                    <div className='newletter inline-block '>
                        <h1 className='uppercase font-bold text-white'>Subscribe Newsletter</h1>
                        <p className='text-xs text-white'>Enter your details below and we’ll contact you to see how we can help.</p>
                    </div>
                    <div className="text-gray-700 flex py-4 lg:float-right lg:py-0">
                        <input className="h-10  placeholder-gray-600 border  sm:px-8" type="text" placeholder="your email" />
                        <button className="h-10 flex items-center px-4 font-medium text-xs  text-white bg-lime-600  hover:bg-gray-500  hover:text-white ">SUBSCRIBE</button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Services