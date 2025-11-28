import React from 'react'

function Smallgrid() {
    const articles = [
        {
            id: 1,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/kiran.jpg",
            title: "मह जोडी सँगै फिल्म नखेल्नुको रहस्य खोल्दै रााता मकै किरन के सी'",
            size: "large"
        },
        {
            id: 2,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/aryan.jpg",
            title: "रिसदेखि रोलसम्ममा यसरी खुले आर्यन",
            size: "small"
        },
        {
            id: 3,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/amrit-gurung-in-denmark.jpg",
            title: "नेपथ्यले डेनमार्कमा नचायो नेपाली",
            size: "small"
        },
        {
            id: 4,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/teej.jpg",
            title: "तीज, राजनीति र व्यक्तिगत संस्कारका कुरा। कता जाँदैछ हाम्रो समाज ?",
            size: "small"
        },
        {
            id: 5,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/magne.jpg",
            title: "के कारण डिप्रेसनमा थिए माग्ने बुढा? राजा भएपछि खाेले रहस्य !",
            size: "small"
        }
    ];

    const mainArticle = articles.slice(0, 1)[0];
    const sideArticles = articles.slice(1);

    return (
        <div className="container mx-auto mt-5 mb-5">
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>राजधानी टिभी</h1>
                <p>पुराना सामग्री »</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 p-2'>
                <div className='lg:col-span-6'>
                    <div className='relative overflow-hidden'>
                        <img className='w-full transition-transform duration-500 hover:scale-105' src={mainArticle.image} alt="" />
                        <p className='text-2xl absolute bottom-2 left-5 font-bold text-white'>{mainArticle.title}</p>
                    </div>
                </div>
                <div className='lg:col-span-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {sideArticles.slice(0, 2).map((article) => (
                            <div key={article.id} className='relative overflow-hidden h-[250px]'>
                                <img className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' src={article.image} alt="" />
                                <p className='text-xl absolute bottom-2 left-2 font-bold text-white'>{article.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2'>
                        {sideArticles.slice(2, 4).map((article) => (
                            <div key={article.id} className='relative overflow-hidden h-[250px]'>
                                <img className='w-full h-full object-cover transition-transform duration-500 hover:scale-105' src={article.image} alt="" />
                                <p className='text-xl absolute bottom-2 left-2 font-bold text-white'>{article.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smallgrid