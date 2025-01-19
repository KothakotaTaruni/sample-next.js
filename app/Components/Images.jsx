export default function Images(){
    
    return (
        <>
        <div className="flex justify-between w-full object-cover">
            <img src="https://images.canadalightingexperts.com/site/common/promos/All/2023/skyx-hero-100.jpg?v2" width={450} height={300} className="mr-3"/>
            <div className="flex overflow-x-scroll scroll-smooth">
                <img src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-3daydelivery-hero.webp" width={640} height={300}/>
                <img src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-canadian-brands-new-hero.webp" width={640} height={300}/>
            </div>
        </div>
        <img src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-sept-heaters-hero.webp?v2" className="w-auto object-cover mt-5"/>
        <div className="flex justify-between bg-cream p-8 w-auto">
            <div>
            <img src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-sept-heaters-electric.jpg" className="w-image h-image object-cover mr-3"/>
            <button className="button rounded-full px-24 py-2 bg-Begie ml-2 mt-2">Electric</button>
            </div>
            <div>
            <img src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-sept-heaters-gas.jpg" className="w-image h-image object-cover ml-3 mr-3"/>
            <button className="button rounded-full px-24 py-2 bg-Begie ml-6 mt-2">Gas</button>
            </div>
            <div>
            <img src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-sept-heaters-freestanding.jpg" className="w-image h-image object-cover ml-3 mr-3"/>
            <button className="button rounded-full px-20 py-2 bg-Begie ml-2 mt-2">Freestanding</button>
            </div>
            <div>
            <img src="https://imgcms.canadalightingexperts.com/site/common/canada/promos/2024/3-sept-heaters-mounted.jpg" className="w-image h-image object-cover ml-3 mr-3"/>
            <button className="button rounded-full px-24 py-2 bg-Begie ml-2 mt-2">Mounted</button>
            </div>
        </div>
        <h1 className="heading text-xl text-center font-bold mt-12">Shop by Category</h1>
        <div className= "w-full flex justify-between p-8">
            <div>
                <img src="https://images.canadalightingexperts.com/site/common/canada/content/cle-chandelier-category.jpg" width={200} height={200} className="rounded-full"/>
                <p className= "text-l font-bold mr-6 ml-10">Chandeliers</p>
            </div>
            <div>
                <img src="https://images.canadalightingexperts.com/site/common/canada/content/cle-outdoor-category.jpg" width={200} height={200} className="rounded-full"/>
                <p className= "text-l font-bold mr-6 ml-10">Outdoor</p>
            </div>
            <div>
                <img src="https://images.canadalightingexperts.com/site/common/canada/content/cle-wall-category.jpg" width={200} height={200} className="rounded-full"/>
                <p className= "text-l font-bold mr-6 ml-10">Wall Sconces</p>
            </div>
            <div>
                <img src="https://images.canadalightingexperts.com/site/common/canada/content/cle-fans-category.jpg" width={200} height={200} className="rounded-full"/>
                <p className= "text-l font-bold mr-6 ml-10">Ceiling Fans</p>
            </div>
            <div>
                <img src="https://imgcms.canadalightingexperts.com/site/common/canada/content/cle-ceiling-category.jpg" width={200} height={200} className="rounded-full"/>
                <p className= "text-l font-bold mr-6 ml-10">Ceiling & Hanging</p>
            </div>
            <div>
                <img src="https://images.canadalightingexperts.com/site/common/canada/content/cle-pendant-category.jpg?v2" width={200} height={200} className="rounded-full"/>
                <p className= "text-l font-bold mr-6 ml-10">Pendants</p>
            </div>
        </div>
      </>
    )
}