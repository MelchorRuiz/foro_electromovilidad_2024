import LightGallery from 'lightgallery/react';
import React, { useState } from 'react'; // Import the useState hook

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { images } from '../data/constans_gallery'

const imageGroups = [];
for (let i = 0; i < images.length; i += 12) {
    imageGroups.push(images.slice(i, i + 12));
}

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    const onAfterOpen = () => {
        console.log('lightGallery has been opened');
    }


    const [page, setPage] = useState(0); // Use the useState hook to initialize the page state variable

    return (
        <>
            <LightGallery
                elementClassNames="flex flex-wrap justify-center gap-5"
                onInit={onInit}
                onAfterOpen={onAfterOpen}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {imageGroups[page].map((image) => (
                    <a href={image.src} className='w-[18rem]'>
                        <img alt={image.alt} src={image.src} />
                    </a>
                ))}
            </LightGallery>
            <div className="flex justify-end gap-2 pt-5">
                {imageGroups.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage(index)}
                        className={`px-3 py-1 rounded-md ${page === index ? 'bg-gray-300' : 'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </>
    );
}
