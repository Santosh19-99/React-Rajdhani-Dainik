import React from 'react'

function Maingrid() {
    const featuredNews = [
        {
            id: 1,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/Sunita_dangol3-768x505.jpg",
            title: "सुनिता डंगोल जेनेभा प्रस्थान",
            description: "काठमाडौँ । स्वीजरल्याण्डको जेनेभामा आयोजना हुने विश्व युवा नेता विश्वव्यापी शिखर सम्मेलनमा भाग लिन काठमाडौँ महानगरपालिकाका उपप्रमुख सुनिता डंगोल प्रस्थान गरेकी छिन्। 'द फोरम अफ"
        },
        {
            id: 2,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/teacher.jpg",
            title: "बझाङमा खुकुरी प्रहारभो ?",
            description: "बझाङ जिल्लाको मस्टा गाउँपालिका–१ रनाडास्थित माइतिबन निम्न माध्यमिक विद्यालयका अङ्ग्रेजी शिक्षक ध्रुवबहादुर रोकायामाथि आइतबार राति धारिलो हतियार प्रहार भएको छ। अज्ञात व्यक्तिहरूले खुकुरी प्रहार गर्दा"
        }
    ];
    const smallNews = [
        {
            id: 1,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/bidhan-samiti-baithak-1.gif",
            title: "निजामती विधेयक राष्ट्रियसभा बैठकमा आजै पेस हुने"
        },
        {
            id: 2,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/Karnali-Rajmarga-Awarudda.jpg",
            title: "अवरुद्ध कर्णाली राजमार्ग ३ दिनपछि खुल्यो"
        },
        {
            id: 3,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/dip-prajlawan-1536x1152.jpg",
            title: "इराकमा हत्या भएका १२ नेपालीको सम्झनामा १०८ दिप प्रज्वलन"
        },
        {
            id: 4,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/rishma-gurung-1536x1024.jpg",
            title: "अभिनयबाट ८ वर्ष किन हराइन अभिनेत्री रिश्मा गुरुङ"
        }
    ];
    const bottomNews = [
        {
            id: 1,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/bidhan-samiti-baithak-1-768x576.gif",
            title: "निजामती विधेयक राष्ट्रियसभा बैठकमा आजै पेस हुने"
        },
        {
            id: 2,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/02/Oli@Suprem.jpg",
            title: "प्रधानमन्त्री ओलीविरुद्धको रिट पूर्ण सुनुवाइमा पठाउने आदेश"
        },
        {
            id: 3,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-01-at-5.10.51-PM-1536x1023-1-768x512.jpeg",
            title: "एससीओमा प्रधानमन्त्री ओलीको सम्बोधन"
        }
    ];

    return (
        <div className="container mx-auto mt-4 mb-3 pb-4 border-b-4 border-b-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                
                <div className="lg:col-span-9">
                   
                    <div className='flex justify-between items-center border-b-4 border-b-red-500'>
                        <h1 className='text-2xl font-bold p-2 bg-red-600 text-white'>ताजा समाचार</h1>
                        <p className='hover:text-green-400 cursor-pointer'>पुराना सामग्री »</p>
                    </div>

                  
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {featuredNews.map((news) => (
                            <div key={news.id} className="p-2">
                                <div>
                                    <img className='h-[300px]' src={news.image} alt="" />
                                    <p className='text-2xl font-bold mt-3'>{news.title}</p>
                                    <p className='text-xl'>{news.description}</p>
                                </div>
                                {smallNews.map((item) => (
                                    <div key={item.id} className='flex items-center justify-between p-3'>
                                        <img className='w-[120px]' src={item.image} alt="" />
                                        <h3 className='text-xl font-bold p-3'>{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <img className='mt-3 mb-3' src="https://rajdhanidaily.com/wp-content/uploads/2021/10/800x125-GIF.gif" alt="" />
                    <div className='flex justify-between items-center border-b-4 border-b-red-500 mb-3'>
                        <h1 className='text-2xl font-bold p-3 bg-red-600 text-white'>समाचार</h1>
                        <p className='hover:text-green-400 cursor-pointer'>पुराना सामग्री »</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {bottomNews.map((news, index) => (
                            <div key={news.id}>
                                <img 
                                    className={`mb-2 ${index > 0 ? 'h-[250px]' : ''}`} 
                                    src={news.image} 
                                    alt="" 
                                />
                                <h2 className='text-2xl font-bold'>{news.title}</h2>
                            </div>
                        ))}
                    </div>
                    <img className='w-full mb-2 mt-4' src="https://rajdhanidaily.com/wp-content/uploads/2021/09/hamropatro-remit.gif" alt="" />
                </div>
                <div className="lg:col-span-3">
                    <h2 className='text-2xl font-bold bg-[#ef4d24] inline-block p-2 text-white'>epaper</h2>
                    <img src="https://amtl.admana.net/www/images/87f608db382583c7d830f11fadd36fd5.gif" alt="" />
                    <img src="https://images.hamro-files.com/jnyYuYIG9cg4rjLXRvG9wc2mzDk=/300x0/smart/https://storage.googleapis.com/hamropatro-storage/1f672a19-6d39-4aa4-b36d-31311c41a491/img-1.jpg" alt="" />
                    <h2 className='text-2xl font-bold bg-[#ef4d24] inline-block p-2 text-white w-full rounded-t-xl'>राजधानी विषेश - Epaper</h2>
                    <img src="https://rajdhanidaily.com/wp-content/uploads/2022/06/rajdhani-22yrs.jpg" alt="" />
                    <img src="https://rajdhanidaily.com/wp-content/uploads/2021/10/sm-01-1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Maingrid