import LightGallery from 'lightgallery/react'
import React, { useState, useEffect } from 'react'

// import styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import { images } from '../../data/constans_gallery'
import './Gallery.css'

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

  // make groups of images based on the imagesForEachPage
  const imageGroups = []
  for (let i = 0; i < images.length; i += imagesForEachPage) {
    imageGroups.push(images.slice(i, i + imagesForEachPage))
  }

  return (
    <div>
      <LightGallery
        elementClassNames='flex flex-wrap justify-center gap-5'
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
      >
        {imageGroups[page].map((image, index) => (
          <a href={image.src} key={index}>
            <img alt={image.alt} src={image.src} loading='lazy' />
          </a>
        ))}
      </LightGallery>
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
            {imageGroups.map((_, index) => (
              <li key={index}>
                <button className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${page === index ? 'bg-gray-100 text-gray-700' : 'text-gray-500 bg-white'}`} onClick={() => setPage(index)}>{index + 1}</button>
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
