import React from 'react'

function Maingrid() {
    return (
        <>
            <div className="container mx-auto mt-4 mb-3 pb-4 border-b-4 border-b-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="lg:col-span-9 gap-2">
                        <div className='flex justify-between items-center border-b-4 border-b-red-500'>
                            <h1 className='text-2xl font-bold p-2 bg-red-600 text-white'>ताजा समाचार</h1>
                            <p className='hover:text-green-400 cursor-pointer'>पुराना सामग्री »</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                            <div className="lg:col-span-6 p-2">
                                <div>
                                    <img src="https://rajdhanidaily.com/wp-content/uploads/2025/09/Sunita_dangol3-768x505.jpg" alt="" />
                                    <p className='text-2xl font-bold mt-3'>सुनिता डंगोल जेनेभा प्रस्थान</p>
                                    <p className=' text-xl'>काठमाडौँ । स्वीजरल्याण्डको जेनेभामा आयोजना हुने विश्व युवा नेता विश्वव्यापी शिखर सम्मेलनमा भाग लिन काठमाडौँ महानगरपालिकाका उपप्रमुख सुनिता डंगोल प्रस्थान गरेकी छिन्। ‘द फोरम अफ</p>
                                </div>
                                <div className='flex items-center justify-between p-3'>
                                    <img className='w-[120px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/bidhan-samiti-baithak-1.gif" alt="" />
                                    <h3 className='text-xl font-bold p-3'>
                                        निजामती विधेयक राष्ट्रियसभा बैठकमा आजै पेस हुने
                                    </h3>
                                </div>
                                <div className='flex items-center justify-between p-3'>
                                    <img className='w-[120px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/Karnali-Rajmarga-Awarudda.jpg" alt="" />
                                    <h3 className='text-xl font-bold p-3'>
                                        अवरुद्ध कर्णाली राजमार्ग ३ दिनपछि खुल्यो
                                    </h3>
                                </div>
                                <div className='flex items-center justify-between p-3'>
                                    <img className='w-[120px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/dip-prajlawan-1536x1152.jpg" alt="" />
                                    <h3 className='text-xl font-bold p-3'>
                                        इराकमा हत्या भएका १२ नेपालीको सम्झनामा १०८ दिप प्रज्वलन
                                    </h3>
                                </div>
                                <div className='flex items-center justify-between p-3'>
                                    <img className='w-[120px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/rishma-gurung-1536x1024.jpg" alt="" />
                                    <h3 className='text-xl font-bold p-3'>
                                        अभिनयबाट ८ वर्ष किन हराइन अभिनेत्री रिश्मा गुरुङ
                                    </h3>
                                </div>
                            </div>
                            <div className="lg:col-span-6 p-2">
                                <div>
                                    <img src="https://rajdhanidaily.com/wp-content/uploads/2025/09/teacher.jpg" className='h-83 object-contain border w-full' alt="" />
                                    <p className='text-2xl font-bold mt-3'>बझाङमा खुकुरी प्रहारभो ?</p>
                                    <p className=' text-xl'>बझाङ जिल्लाको मस्टा गाउँपालिका–१ रनाडास्थित माइतिबन निम्न माध्यमिक विद्यालयका अङ्ग्रेजी शिक्षक ध्रुवबहादुर रोकायामाथि आइतबार राति धारिलो हतियार प्रहार भएको छ। अज्ञात व्यक्तिहरूले खुकुरी प्रहार गर्दा</p>
                                </div>
                                <div className='flex items-center justify-between p-3'>
                                    <img className='w-[120px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/bidhan-samiti-baithak-1.gif" alt="" />
                                    <h3 className='text-xl font-bold p-3'>
                                        निजामती विधेयक राष्ट्रियसभा बैठकमा आजै पेस हुने
                                    </h3>
                                </div>
                                <div className='flex items-center justify-between p-3'>
                                    <img className='w-[120px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/Karnali-Rajmarga-Awarudda.jpg" alt="" />
                                    <h3 className='text-xl font-bold p-3'>
                                        अवरुद्ध कर्णाली राजमार्ग ३ दिनपछि खुल्यो
                                    </h3>
                                </div>
                                <div className='flex items-center justify-between p-3'>
                                    <img className='w-[120px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/dip-prajlawan-1536x1152.jpg" alt="" />
                                    <h3 className='text-xl font-bold p-3'>
                                        इराकमा हत्या भएका १२ नेपालीको सम्झनामा १०८ दिप प्रज्वलन
                                    </h3>
                                </div>
                                <div className='flex items-center justify-between p-3'>
                                    <img className='w-[120px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/rishma-gurung-1536x1024.jpg" alt="" />
                                    <h3 className='text-xl font-bold p-3'>
                                        अभिनयबाट ८ वर्ष किन हराइन अभिनेत्री रिश्मा गुरुङ
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <img className='mt-3 mb-3' src="https://rajdhanidaily.com/wp-content/uploads/2021/10/800x125-GIF.gif" alt="" />
                        <div className='flex justify-between items-center border-b-4 border-b-red-500 mb-3'>
                            <h1 className='text-2xl font-bold p-3 bg-red-600 text-white'>समाचार</h1>
                            <p className='hover:text-green-400 cursor-pointer'>पुराना सामग्री »</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 justify-between gap-6">
                            <div className="lg:col-span-4 ">
                                <img className='mb-2' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/bidhan-samiti-baithak-1-768x576.gif" alt="" />
                                <h2 className='text-2xl font-bold'>निजामती विधेयक राष्ट्रियसभा बैठकमा आजै पेस हुने</h2>
                            </div>
                            <div className="lg:col-span-4">
                                <img className='mb-2 h-[250px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/02/Oli@Suprem.jpg" alt="" />
                                <h2 className='text-2xl font-bold'>प्रधानमन्त्री ओलीविरुद्धको रिट पूर्ण सुनुवाइमा पठाउने आदेश</h2>
                            </div>
                            <div className="lg:col-span-4 mb-4">
                                <img className='mb-2 h-[250px]' src="https://rajdhanidaily.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-at-5.10.51-PM-1536x1023-1-768x512.jpeg" alt="" />
                                <h2 className='text-2xl font-bold'>एससीओमा प्रधानमन्त्री ओलीको सम्बोधन</h2>
                            </div>
                        </div>
                        <img className='w-full mb-2' src="https://rajdhanidaily.com/wp-content/uploads/2021/09/hamropatro-remit.gif" alt="" />
                    </div>
                    <div className="lg:col-span-3">
                        <div><h2 className='text-2xl font-bold bg-[#ef4d24] inline-block p-2 text-white'>epaper</h2></div>
                        <img src="https://amtl.admana.net/www/images/87f608db382583c7d830f11fadd36fd5.gif" alt="" />
                        <img src="https://images.hamro-files.com/jnyYuYIG9cg4rjLXRvG9wc2mzDk=/300x0/smart/https://storage.googleapis.com/hamropatro-storage/1f672a19-6d39-4aa4-b36d-31311c41a491/img-1.jpg" alt="" />

                        <h2 className='text-2xl font-bold bg-[#ef4d24] inline-block p-2 text-white w-full rounded-t-xl'>राजधानी विषेश - Epaper</h2>
                        <img src="https://rajdhanidaily.com/wp-content/uploads/2022/06/rajdhani-22yrs.jpg" alt="" />
                        <img src="https://rajdhanidaily.com/wp-content/uploads/2021/10/sm-01-1.jpg" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Maingrid
