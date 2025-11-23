import React from 'react'

function Firstnews() {
    const newsHeadings = [{
        title: "राप्रपा महाधिवेशन निर्वाचन समिति विवादको घेरामा",
        image: "https://rajdhanidaily.com/wp-content/uploads/2022/04/rajdhani-author-small.png",
        writer: "राजधानी समाचारदाता",
        newsDate: "२०८२ मंसिर ४ गते १३:२९"
    },

    {
        title: "मनाङ्मा सशस्त्र प्रहरी बल नेपालको स्वास्थ्य शिविर",
        image: "https://rajdhanidaily.com/wp-content/uploads/2022/04/rajdhani-author-small.png",
        writer: "राजधानी समाचारदाता",
        newsDate: "२०८२ मंसिर ४ गते १३:२९"

    }];
    return (
        <>
            <div className="container mx-auto mt-3">
                {newsHeadings.map((Item, index) => (
                    <div key={index}
                        className='mt-4 text-center'>
                        <h1 className='text-6xl mb-4  font-bold hover:text-red-700 cursor-pointer transition duration-300'>{Item.title}</h1>
                        <div className='flex gap-2 items-center justify-center mt-4'>
                            <img src={Item.image} width={20} height={20} alt="" />
                            <p className=''>{Item.writer}<i className="fa-regular fa-clock"></i>{Item.newsDate} </p>
                        </div>
                        <img className='mx-auto mt-3 mb-4' src="https://rajdhanidaily.com/wp-content/uploads/2025/11/1200X100.gif" alt="" />
                    </div>
                ))}

            </div>
        </>
    )
}

export default Firstnews