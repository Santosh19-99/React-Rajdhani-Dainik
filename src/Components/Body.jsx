import React from 'react'

function Body() {

    const bodyNews = [{
        title: "कांग्रेसमा महाधिवेशन अन्योल यथावत्, केन्द्रीय समिति बैठक फेरि स्थगित",
        logo: "https://rajdhanidaily.com/wp-content/uploads/2022/04/rajdhani-author-small.png",
        image: "https://rajdhanidaily.com/wp-content/uploads/2025/11/congress-1536x1025.jpeg",
        news: "काठमाडौं । नेपाली कांग्रेसको केन्द्रीय कार्यसमिति बैठक पुनः सरेको छ। आज (बिहीबार) का लागि तय भएको बैठक यही शनिबार दिउँसो १ बजेसम्मका लागि स्थगित भएको पार्टी केन्द्रीय कार्यालयका मुख्य सचिव कृष्णप्रसाद पौडेलले जानकारी दिए । यो सँगै कांग्रेसभित्र विशेष महाधिवेशनको विषयमा देखिएको अन्योल कायमै रहेको हो । पटकपटक सर्दै आएको",
        writer: "राजधानी समाचारदाता",
        newsDate: "२०८२ मंसिर ४ गते १३:२९"
    },
    {
        title: "सहायक निर्देशकबाट अभिनयमा उत्रेका यी स्टार अभिनेता",
        logo: "https://rajdhanidaily.com/wp-content/uploads/2022/04/rajdhani-author-small.png",
        image: "https://rajdhanidaily.com/wp-content/uploads/2025/11/collage.jpg",
        news: "मुम्बई । बलिउडमा धेरै सफल अभिनेताहरू चलचित्रमा अभिनय गर्ने क्रममा चलचित्रको प्राविधिक पक्ष’bout जानकार थिए । किनकि उनीहरूले आफ्नो चलचित्र करियर सहायक निर्देशकको रूपमा सुरु गरेका थिए । यसरी उनीहरूले सहायक निर्देशक भएर विभिन्न चलचित्रहरूमा काम गरेपछि अभिनयमा फडेको मारे । जो आज बलिउडमा स्टार अभिनेताको रूपमा लोकप्रिय छन् ।",
        writer: "राजधानी समाचारदाता",
        newsDate: "२०८२ मंसिर ४ गते १३:२९"
    }]

    return (
        <>
            <div className="container mx-auto mt-3">
                {bodyNews.map((item, index) => (
                    <div
                        key={index}
                        className='flex flex-col text-center items-center justify-center gap-4 mb-10 px-2'>
                        <p className='text-6xl mb-4  font-bold hover:text-red-700 cursor-pointer transition duration-300'>{item.title}</p>
                        <div className='flex gap-2'>
                            <img width={20} height={20} src={item.logo} alt="" />
                            <p>{item.writer}<i className="fa-regular fa-clock"></i>{item.newsDate}</p>
                        </div>
                        <img src={item.image} className='w-fit h-screen' alt="" />
                        <p className='text-2xl'>{item.news}</p>
                        <p className='text-green-800 text-xl font-bold hover:cursor-pointer'>Read More »</p>
                    </div>
                ))}
                <img src="https://rajdhanidaily.com/wp-content/uploads/2024/08/Prabhu-Khutruke-Saving-c.gif" className='mx-auto' alt="" />
            </div>
        </>
    )
}

export default Body
