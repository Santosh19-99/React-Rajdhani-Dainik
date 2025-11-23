import React from 'react'

function Maingrid() {
    return (
        <>
            <div className="container mx-auto mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-9 gap-2">
                        <div className='flex justify-between items-center border-b-4 border-b-red-500'>
                            <h1 className='text-2xl font-bold p-2 bg-red-600 text-white'>ताजा समाचार</h1>
                            <p className='hover:text-green-400 cursor-pointer'>पुराना सामग्री »</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                            <div className="lg:col-span-6 p-2">
                                <img src="https://rajdhanidaily.com/wp-content/uploads/2025/09/Sunita_dangol3-768x505.jpg" alt="" />
                                <p className='text-2xl font-bold mt-3'>सुनिता डंगोल जेनेभा प्रस्थान</p>
                                <p className=' text-xl'>काठमाडौँ । स्वीजरल्याण्डको जेनेभामा आयोजना हुने विश्व युवा नेता विश्वव्यापी शिखर सम्मेलनमा भाग लिन काठमाडौँ महानगरपालिकाका उपप्रमुख सुनिता डंगोल प्रस्थान गरेकी छिन्। ‘द फोरम अफ</p>
                            </div>
                            <div className="lg:col-span-6 p-2">
                                <img src="https://rajdhanidaily.com/wp-content/uploads/2025/09/teacher.jpg" className='h-83 object-contain border w-full' alt="" />
                                <p className='text-2xl font-bold mt-3'>बझाङमा खुकुरी प्रहारभो ?</p>
                                <p className=' text-xl'>बझाङ जिल्लाको मस्टा गाउँपालिका–१ रनाडास्थित माइतिबन निम्न माध्यमिक विद्यालयका अङ्ग्रेजी शिक्षक ध्रुवबहादुर रोकायामाथि आइतबार राति धारिलो हतियार प्रहार भएको छ। अज्ञात व्यक्तिहरूले खुकुरी प्रहार गर्दा</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3">Hello</div>
                </div>
            </div>
        </>
    )
}

export default Maingrid
