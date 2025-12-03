import React from 'react'

function Footer() {
    return (
        <>
            <div className='bg-[#000851] py-3 '>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:text-left text-center mb-4">
                        <div className='lg:col-span-4 bg-white text-center flex flex-col items-center py-3'>
                            <img src="https://rajdhanidaily.com/wp-content/uploads/2021/10/web-logo-resized.jpg" alt="" />
                            <ul className=''>
                                <li className='text-xl text-red-600 font-bold'>स्व. महेन्द्र शेरचनद्वारा स्थापित</li>
                                <li className='text-xl text-red-600 font-bold'>राजधानी न्यूज पब्लिकेशन प्रा. लि.</li>
                                <li className='text-xl text-red-600 font-bold'>सूचना तथा प्रशारण विभाग</li>
                                <li className='text-xl text-red-600 font-bold'>दर्ता नं.: ११३२/०७५-७६</li>
                                <li className='text-xl text-red-600'>राजधानी भवन</li>
                                <li className='text-xl text-red-600'>सरस्वती नगर, चाबहिल,</li>
                                <li className='text-xl text-red-600'>पो.ब.न. : २०५०३, काठमाडौं – नेपाल</li>
                                <li className='text-xl text-red-600'>फोन : ९७७–०१–४८११०८०</li>
                                <li className='text-xl text-red-600'>rajdhaninews@gmail.com</li>
                            </ul>
                        </div>
                        <div className='lg:col-span-8'>
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                <div className='lg:col-span-4'>
                                    <ul className='text-white font-bold'>
                                        <li className='mt-3 hover:text-blue-600 cursor-pointer'>कोशी</li>
                                        <li className='mt-3 hover:text-blue-600 cursor-pointer '>मधेस</li>
                                        <li className='mt-3 hover:text-blue-600 cursor-pointer '>बागमती</li>
                                        <li className='mt-3 hover:text-blue-600 cursor-pointer '>गण्डकी</li>
                                        <li className='mt-3 hover:text-blue-600 cursor-pointer'>लुम्बिनी</li>
                                        <li className='mt-3 hover:text-blue-600 cursor-pointer'>कर्णाली</li>
                                        <li className='mt-3 hover:text-blue-600 cursor-pointer'>सुदूरपश्चिम</li>
                                        <li className='mt-3 text-xl text-red-600'>अध्यक्ष:सचिन शेरचन</li>
                                    </ul>
                                </div>
                                <div className='lg:col-span-4'>
                                    <ul className='text-white font-bold'>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>ई-पेपर</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>बिचार</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>राजनीति</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>रोचक</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>समाज</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>सुरक्षा/अपराध</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>सूचना प्रविधि</li>
                                        <li className='mt-3 text-xl text-red-600 cursor-pointer'>प्रबन्ध निर्देशक:आशिस शेरचन</li>
                                    </ul>
                                </div>
                                <div className='lg:col-span-4'>
                                    <ul className='text-white font-bold'>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>अन्तराष्ट्रिय</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>अन्तर्वार्ता</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>अर्थ</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>कला</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>मेराे नेपाल</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>विदेश</li>
                                        <li className='mt-3 hover:text-blue-500 cursor-pointer'>सौजन्य</li>
                                        <li className='mt-3 text-xl text-red-600'>सम्पादकःडिल्ली आचार्य</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-white py-3  text-center border-t-2'>
                        <ul className='flex gap-3 items-center justify-center'>
                            <li className='hover:text-blue-500 cursor-pointer'>Privacy</li>
                            <li className='hover:text-blue-500 cursor-pointer'>Advertisement</li>
                            <li className='hover:text-blue-500 cursor-pointer'>Contact us</li>
                        </ul>
                        <p>© २०२५ राजधानी न्युज पब्लिकेशन प्रा.लि सर्वाधिकार सुरक्षित Copyright © 2025 Rajdhani News Publication Pvt. Ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
