import React from 'react'

function Filmnews() {
    const articles = [
        {
            id: 1,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/param-sundari.jpg",
            title: "बक्स अफिसमा माथि चढ्दै 'परम सुन्दरी'",
            size: "large"
        },
        {
            id: 2,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/riyana-short-film.jpg",
            title: "नेपाली चलचित्र 'रिहाना' बुसान फिल्म फेस्टिभल'",
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
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/shanti-ram-ekal-sajh.jpg",
            title: "एक साँझमा प्रस्तुत हुँदै शान्तिराम राई",
            size: "small"
        },
        {
            id: 5,
            image: "https://rajdhanidaily.com/wp-content/uploads/2025/09/20250831_224102-1536x864.jpg",
            title: "नेपाल आइडल सिजन–६ को विजेता गङ्गा सोनाम",
            size: "small"
        }
    ];

    const mainArticle = articles.slice(0, 1)[0];
    const sideArticles = articles.slice(1);

    return (
        <div className="container mx-auto mt-5 mb-5">
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 p-2'>
                <div className='lg:col-span-6'>
                    <div className='relative overflow-hidden'>
                        <img className='w-full transition-transform duration-500 hover:scale-105' src={mainArticle.image} alt="" />
                        <p className='text-3xl absolute bottom-2 left-5 font-bold text-white'>{mainArticle.title}</p>
                    </div>
                </div>
                <div className='lg:col-span-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        {sideArticles.slice(0, 2).map((article) => (
                            <div key={article.id} className='relative overflow-hidden'>
                                <img className='w-full transition-transform duration-500 hover:scale-105' src={article.image} alt="" />
                                <p className='text-xl absolute bottom-2 left-2 font-bold text-white'>{article.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2'>
                        {sideArticles.slice(2, 4).map((article) => (
                            <div key={article.id} className={`relative overflow-hidden ${article.id === 5 ? 'h-[225px]' : ''}`}>
                                <img className={`w-full transition-transform duration-500 hover:scale-105 ${article.id === 5 ? 'h-full' : ''}`} src={article.image} alt="" />
                                <p className='text-xl absolute bottom-2 left-2 font-bold text-white'>{article.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filmnews