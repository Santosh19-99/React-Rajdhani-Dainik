import React, { useState } from 'react';

function Header() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    };
    return (
        <>
            <div className='shadow-xl'>
                <div className="container mx-auto">
                    <div className=' py-4 px-2'>
                        <div className='grid grid-cols-1 md:grid-cols-2 px-2 items-center'>
                            <img src="https://rajdhanidaily.com/wp-content/uploads/2021/10/web-logo-resized.jpg" alt="" />
                            <img src="https://rajdhanidaily.com/wp-content/uploads/2024/08/Prabhu-Khutruke-Saving-c.gif" alt="" />
                        </div>

                        <div className='mt-3 flex justify-between items-center'>
                            <i className="fa-solid fa-bars block! md:hidden! text-2xl cursor-pointer" onClick={toggleMobileMenu}></i>
                            <nav className=' hidden md:flex justify-between items-center w-full gap-6'>
                                <ul className='flex gap-3 font-bold text-gray-600 mt-3'>
                                    <li className='hover:cursor-pointer hover:text-black'>होमपेज</li>
                                    <li className='hover:cursor-pointer hover:text-black'>खाना/कृषि</li>
                                    <li className='hover:cursor-pointer hover:text-black'>राजनीति</li>
                                    <li className='hover:cursor-pointer hover:text-black'>अर्थ</li>
                                    <li className='hover:cursor-pointer hover:text-black'>समाज</li>
                                    <li className='hover:cursor-pointer hover:text-black'>खेल</li>
                                    <li className='hover:cursor-pointer hover:text-black'>बिचार</li>
                                    <li className='hover:cursor-pointer hover:text-black'>सौजन्य</li>
                                    <li className='hover:cursor-pointer hover:text-black'>कला</li>
                                </ul>
                                <form action="">
                                    <input type="text" placeholder='Search' className='py-2 outline-none border rounded' />
                                    <button className='py-2 border px-1 mr-2 rounded'>Search</button>
                                </form>
                            </nav>
                        </div>
                        {/* Mobile Menu */}
                        {isMobileOpen && (
                            <div className='transform translate-x-2'>
                                <ul className='flex flex-col gap-3 font-bold text-gray-600 text-left md:hidden'>
                                    <li className='hover:cursor-pointer hover:text-black'>होमपेज</li>
                                    <li className='hover:cursor-pointer hover:text-black'>खाना/कृषि</li>
                                    <li className='hover:cursor-pointer hover:text-black'>राजनीति</li>
                                    <li className='hover:cursor-pointer hover:text-black'>अर्थ</li>
                                    <li className='hover:cursor-pointer hover:text-black'>समाज</li>
                                    <li className='hover:cursor-pointer hover:text-black'>खेल</li>
                                    <li className='hover:cursor-pointer hover:text-black'>बिचार</li>
                                    <li className='hover:cursor-pointer hover:text-black'>सौजन्य</li>
                                    <li className='hover:cursor-pointer hover:text-black'>कला</li>
                                </ul>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
