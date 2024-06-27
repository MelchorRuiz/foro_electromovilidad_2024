import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { useState, useEffect } from 'react'
import images from '../data/gallery_images.json'

function Images({ galleryID, images}) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery flex flex-wrap justify-center gap-5" id={galleryID}>
      {images.map((image, index) => (
        <a
          className='w-full md:w-[48%] lg:w-[31%] xl:w-[23%] lg:hover:scale-[1.05] transition-transform duration-300 ease-in-out overflow-hidden rounded-sm'
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.src} alt={image.alt} loading='lazy' />
        </a>
      ))}
    </div>
  );
}

export function Gallery() {
  const [page, setPage] = useState(0) // Use the useState hook to initialize the page state variable
  const [imagesForEachPage, setImagesForEachPage] = useState(12) // Initialize imagesForEachPage state variable

  useEffect(() => {
    // Define the matchMedia instances
    const tabletMatch = window.matchMedia('(min-width: 768px)')
    const laptopMatch = window.matchMedia('(min-width: 1024px)')
    const desktopMatch = window.matchMedia('(min-width: 1280px)')

    // Function to update the state based on the matchMedia instances
    const updateImagesPerPage = () => {
      if (desktopMatch.matches) {
        setImagesForEachPage(12)
      } else if (laptopMatch.matches) {
        setImagesForEachPage(9)
      } else if (tabletMatch.matches) {
        setImagesForEachPage(6)
      } else {
        setImagesForEachPage(3)
      }
      setPage(0)
    }

    // Update the state when the component mounts
    updateImagesPerPage()

    tabletMatch.onchange = updateImagesPerPage
    laptopMatch.onchange = updateImagesPerPage
    desktopMatch.onchange = updateImagesPerPage
  }, [])

  const getNumberPages = () => {
    const arr = [...Array(imageGroups.length).keys()]
    if (imageGroups.length <= 5) {
      return arr
    }
    if (page < 2) {
      return arr.slice(0, 5)
    } else if (imageGroups.length - page < 3) {
      return arr.slice(imageGroups.length - 5)
    } else {
      return arr.slice(page - 2, page + 3)
    }
  }

  // make groups of images based on the imagesForEachPage
  const imageGroups = []
  for (let i = 0; i < images.length; i += imagesForEachPage) {
    imageGroups.push(images.slice(i, i + imagesForEachPage))
  }

  return (
    <div>
      <Images galleryID="asas" images={imageGroups[page]} />
      <div className='flex justify-center pt-5'>
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700" onClick={() => setPage(page === 0 ? 0 : page - 1)}>
                <span className="sr-only">Previous</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
              </button>
            </li>
            {getNumberPages().map((n, index) => (
              <li key={index}>
                <button className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${page === n ? 'bg-gray-100 text-gray-700' : 'text-gray-500 bg-white'}`} onClick={() => setPage(n)}>{n + 1}</button>
              </li>
            ))}
            <li>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700" onClick={() => setPage(page === imageGroups.length - 1 ? imageGroups.length - 1 : page + 1)}>
                <span className="sr-only">Next</span>
                <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
