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
      } else if (tabletMatch.matches){
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
    <>
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
      <div className='flex justify-end gap-2 pt-5'>
        {imageGroups.map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index)}
            className={`px-3 py-1 rounded-md ${
              page === index ? 'bg-gray-300' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  )
}
