import React from 'react'

function Smallgrid() {
    return (
        <>
            <div className="container mx-auto mt-5 mb-5">
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>राजधानी टिभी</h1>
                    <p>पुराना सामग्री »</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 p-2'>
                    <div className='lg:col-span-6'>
                        <div className=' relative overflow-hidden'>

                            <img className='w-full transition-transform duration-500 hover:scale-105  ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/kiran.jpg" alt="" />
                            <p className='text-2xl absolute  bottom-2 left-5 font-bold text-white'>मह जोडी सँगै फिल्म नखेल्नुको रहस्य खोल्दै रााता मकै किरन के सी’</p>
                        </div>
                    </div>
                    <div className='lg:col-span-6'>
                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4'>
                            <div className='lg:col-span-6'>
                                <div className=' relative overflow-hidden'>
                                    <img className='w-full transition-transform duration-500 hover:scale-105  ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/aryan.jpg" alt="" />
                                    <p className='text-xl absolute  bottom-2 left-2 font-bold text-white'>रिसदेखि रोलसम्ममा यसरी खुले आर्यन </p>
                                </div>
                            </div>
                            <div className='lg:col-span-6'>
                                <div className=' relative overflow-hidden h-[250px]'>
                                    <img className='w-full h-full object-center transition-transform duration-500 hover:scale-105  ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/amrit-gurung-in-denmark.jpg" alt="" />
                                    <p className='text-xl absolute  bottom-2 left-2 font-bold text-white'>नेपथ्यले डेनमार्कमा नचायो नेपाली</p>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 mt-2'>
                            <div className='lg:col-span-6'>
                                <div className=' relative overflow-hidden'>

                                    <img className='w-full transition-transform duration-500 hover:scale-105  ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/teej.jpg" alt="" />
                                    <p className='text-xl absolute  bottom-2 left-2 font-bold text-white'>तीज, राजनीति र व्यक्तिगत संस्कारका कुरा। कता जाँदैछ हाम्रो समाज ?</p>
                                </div>
                            </div>
                            <div className='lg:col-span-6'>
                                <div className=' relative overflow-hidden  h-[250px]'>
                                    <img className='w-full transition-transform duration-500 hover:scale-105 h-full ' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/magne.jpg" alt="" />
                                    <p className='text-xl absolute  bottom-2 left-2 font-bold text-white'>के कारण डिप्रेसनमा थिए माग्ने बुढा? राजा भएपछि खाेले रहस्य !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Smallgrid
