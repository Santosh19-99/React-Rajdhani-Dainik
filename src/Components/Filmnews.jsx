import React from 'react'

function Filmnews() {
    return (
        <>
            <div className="container mx-auto mt-5 mb-5">
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 p-2'>
                    <div className='lg:col-span-6'>
                        <div className=' relative overflow-hidden'>

                            <img className='w-full transition-transform duration-500 hover:scale-105  ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/param-sundari.jpg" alt="" />
                            <p className='text-3xl absolute  bottom-2 left-5 font-bold text-white'>बक्स अफिसमा माथि चढ्दै ‘परम सुन्दरी’</p>
                        </div>
                    </div>
                    <div className='lg:col-span-6'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
                            <div className='lg:col-span-6'>
                                <div className=' relative overflow-hidden'>
                                    <img className='w-full transition-transform duration-500 hover:scale-105  ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/riyana-short-film.jpg" alt="" />
                                    <p className='text-xl absolute  bottom-2 left-2 font-bold text-white'>नेपाली चलचित्र ‘रिहाना’ बुसान फिल्म फेस्टिभल’</p>
                                </div>
                            </div>
                            <div className='lg:col-span-6'>
                                <div className=' relative overflow-hidden'>
                                    <img className='w-full transition-transform duration-500 hover:scale-105  ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/amrit-gurung-in-denmark.jpg" alt="" />
                                    <p className='text-xl absolute  bottom-2 left-2 font-bold text-white'>नेपथ्यले डेनमार्कमा नचायो नेपाली</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mt-2'>
                            <div className='lg:col-span-6'>
                                <div className=' relative overflow-hidden'>

                                    <img className='w-full transition-transform duration-500 hover:scale-105  ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/shanti-ram-ekal-sajh.jpg" alt="" />
                                    <p className='text-xl absolute  bottom-2 left-2 font-bold text-white'>एक साँझमा प्रस्तुत हुँदै शान्तिराम राई</p>
                                </div>
                            </div>
                            <div className='lg:col-span-6'>
                                <div className=' relative overflow-hidden h-[225px]'>
                                    <img className='w-full transition-transform duration-500 hover:scale-105 h-full ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/20250831_224102-1536x864.jpg" alt="" />
                                    <p className='text-xl absolute  bottom-2 left-2 font-bold text-white'>नेपाल आइडल सिजन–६ को विजेता गङ्गा सोनाम</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filmnews
