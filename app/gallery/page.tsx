"use client"

import { useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false })

type GalleryItem = {
  src: string
  type: "image" | "video"
  alt: string
  category: string
}

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const galleryItems: GalleryItem[] = [
    // Images
    { src: "/images/chicken1.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
    { src: "/images/chicken2.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
    { src: "/images/chicken3.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
    { src: "/images/chicken4.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
    { src: "/images/chicken5.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
    { src: "/images/chicken6.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
    { src: "/images/maize.jpg?height=300&width=400", type: "image", alt: "Maize Field", category: "Crops" },
    { src: "/images/maize3.jpg?height=300&width=400", type: "image", alt: "Maize Field", category: "Crops" },
    { src: "/images/maize2.jpg?height=300&width=400", type: "image", alt: "Farm Workers", category: "Team" },
    { src: "/images/banana1.jpg?height=300&width=400", type: "image", alt: "Banana Field", category: "Crops" },
    { src: "/images/banana2.jpg?height=300&width=400", type: "image", alt: "Banana Field", category: "Crops" },
    { src: "/images/banana3.jpg?height=300&width=400", type: "image", alt: "Banana Field", category: "Crops" },
    { src: "/images/banana4.jpg?height=300&width=400", type: "image", alt: "Banana Field", category: "Crops" },
    { src: "/images/irrigation.jpg?height=300&width=400", type: "image", alt: "Irrigation", category: "Irrigation" },
    { src: "/images/organic.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/images/organic2.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/images/organic3.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/images/organic4.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/images/organic5.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/images/organic6.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/images/organic7.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/images/cattle.jpg?height=300&width=400", type: "image", alt: "Cattle Farming", category: "Cattle" },
    { src: "/images/cattle1.jpg?height=300&width=400", type: "image", alt: "Cattle Farming", category: "Cattle" },
    { src: "/images/cattle3.jpg?height=300&width=400", type: "image", alt: "Cattle Farming", category: "Cattle" },

    // Videos (recorded via smartphone)
    { src: "/videos/chicken1.mp4", type: "video", alt: "Feeding Chickens", category: "Poultry" },
    { src: "/videos/chicken2.mp4", type: "video", alt: "Feeding Chickens", category: "Poultry" },
    { src: "/videos/feeds1.mp4", type: "video", alt: "Feeds", category: "Poultry" },
    { src: "/videos/feeds2.mp4", type: "video", alt: "Feeds", category: "Poultry" },
    { src: "/videos/maize-field1.mp4", type: "video", alt: "Maize", category: "Crops" },
    { src: "/videos/maize-field2.mp4", type: "video", alt: "Maize", category: "Crops" },
    { src: "/videos/organic1.mp4", type: "video", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/videos/organic2.mp4", type: "video", alt: "Organic Fertilizer", category: "Fertilizer" },
    { src: "/videos/banana1.mp4", type: "video", alt: "Banana", category: "Crops" },
    { src: "/videos/irrigation.mp4", type: "video", alt: "Irrigation Demo", category: "Irrigation" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
       <section className="relative">
         <div className="absolute inset-0 bg-black/60 z-10" />
         <div className="relative h-[400px] w-full">
           <Image src="/images/banner.jpg" alt="DMT Acres Gallery" fill className="object-cover" />
         </div>
         <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Photo & Video Gallery</h1>
           <p className="mx-auto max-w-[700px] mt-4 text-lg text-gray-200">
             A visual showcase of our farming life and operations
           </p>
         </div>
       </section>

      {/* Gallery Section */}
      <section className="py-16">
         <div className="container">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {galleryItems.map((item, index) => (
               <div key={index} className="group relative overflow-hidden rounded-lg">
                 <div className="relative h-64 w-full">
                   {item.type === "image" ? (
                     <Image
                       src={item.src}
                       alt={item.alt}
                       fill
                       className="object-cover transition-transform group-hover:scale-105"
                     />
                   ) : (
                     <ReactPlayer
                       url={item.src}
                       controls
                       muted
                       playing={false}
                       width="100%"
                       height="100%"
                       style={{ borderRadius: "0.5rem" }}
                     />
                   )}
                 </div>
                 <div
                   onClick={() => setSelectedItem(item)}
                   className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 cursor-pointer"
                 >
                   <p className="font-semibold text-lg">{item.alt}</p>
                   <span className="text-sm bg-green-700 px-2 py-1 rounded-full mt-2">{item.category}</span>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white max-w-4xl w-full rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 z-10 text-white bg-black/50 rounded-full p-2 hover:bg-black"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              {selectedItem.type === "image" ? (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain"
                />
              ) : (
                <ReactPlayer
                  url={selectedItem.src}
                  playing
                  controls
                  muted
                  width="100%"
                  height="100%"
                />
              )}
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{selectedItem.alt}</h2>
              <p className="text-sm text-gray-500">{selectedItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


// "use client"

// import React, { useState } from 'react'
// import Image from "next/image"

// // Define the type for the gallery items
// type GalleryItem = {
//   src: string
//   type: "image" | "video"
//   alt: string
//   category: string
// }

// export default function GalleryPage() {
//   const galleryItems: GalleryItem[] = [
//     // Images
//     { src: "/images/chicken1.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
//     { src: "/images/chicken2.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
//     { src: "/images/chicken3.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
//     { src: "/images/chicken4.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
//     { src: "/images/chicken5.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
//     { src: "/images/chicken6.jpg?height=300&width=400", type: "image", alt: "Poultry Farm", category: "Poultry" },
//     { src: "/images/maize.jpg?height=300&width=400", type: "image", alt: "Maize Field", category: "Crops" },
//     { src: "/images/maize3.jpg?height=300&width=400", type: "image", alt: "Maize Field", category: "Crops" },
//     { src: "/images/maize2.jpg?height=300&width=400", type: "image", alt: "Farm Workers", category: "Team" },
//     { src: "/images/banana1.jpg?height=300&width=400", type: "image", alt: "Banana Field", category: "Crops" },
//     { src: "/images/banana2.jpg?height=300&width=400", type: "image", alt: "Banana Field", category: "Crops" },
//     { src: "/images/banana3.jpg?height=300&width=400", type: "image", alt: "Banana Field", category: "Crops" },
//     { src: "/images/banana4.jpg?height=300&width=400", type: "image", alt: "Banana Field", category: "Crops" },
//     { src: "/images/irrigation.jpg?height=300&width=400", type: "image", alt: "Irrigation", category: "Irrigation" },
//     { src: "/images/organic.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
//     { src: "/images/organic2.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
//     { src: "/images/organic3.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
//     { src: "/images/organic4.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
//     { src: "/images/organic5.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
//     { src: "/images/organic6.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
//     { src: "/images/organic7.jpg?height=300&width=400", type: "image", alt: "Organic Fertilizer", category: "Fertilizer" },
//     { src: "/images/cattle.jpg?height=300&width=400", type: "image", alt: "Cattle Farming", category: "Cattle" },
//     { src: "/images/cattle1.jpg?height=300&width=400", type: "image", alt: "Cattle Farming", category: "Cattle" },
//     { src: "/images/cattle3.jpg?height=300&width=400", type: "image", alt: "Cattle Farming", category: "Cattle" },

//     // Videos (recorded via smartphone)
//     { src: "/videos/chicken1.mp4", type: "video", alt: "Feeding Chickens", category: "Poultry" },
//     { src: "/videos/chicken2.mp4", type: "video", alt: "Feeding Chickens", category: "Poultry" },
//     { src: "/videos/feeds1.mp4", type: "video", alt: "Feeds", category: "Poultry" },
//     { src: "/videos/feeds2.mp4", type: "video", alt: "Feeds", category: "Poultry" },
//     { src: "/videos/maize-field1.mp4", type: "video", alt: "Maize", category: "Crops" },
//     { src: "/videos/maize-field2.mp4", type: "video", alt: "Maize", category: "Crops" },
//     { src: "/videos/organic1.mp4", type: "video", alt: "Organic Fertilizer", category: "Fertilizer" },
//     { src: "/videos/organic2.mp4", type: "video", alt: "Organic Fertilizer", category: "Fertilizer" },
//     { src: "/videos/banana1.mp4", type: "video", alt: "Banana", category: "Crops" },
//     { src: "/videos/irrigation.mp4", type: "video", alt: "Irrigation Demo", category: "Irrigation" },
//     { src: "/videos/workers.mp4", type: "video", alt: "Workers", category: "Team" },
//   ]


//   // State to keep track of the selected gallery item
//   const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

//   // Function to open the modal
//   const openModal = (item: GalleryItem) => {
//     setSelectedItem(item)
//   }

//   // Function to close the modal
//   const closeModal = () => {
//     setSelectedItem(null)
//   }

//   // Function to go to the next item in the gallery
//   const nextItem = () => {
//     if (selectedItem) {
//       const currentIndex = galleryItems.indexOf(selectedItem)
//       const nextIndex = (currentIndex + 1) % galleryItems.length // Loop back to the first item
//       setSelectedItem(galleryItems[nextIndex])
//     }
//   }

//   // Function to go to the previous item in the gallery
//   const prevItem = () => {
//     if (selectedItem) {
//       const currentIndex = galleryItems.indexOf(selectedItem)
//       const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length // Loop to the last item if at the start
//       setSelectedItem(galleryItems[prevIndex])
//     }
//   }

//   return (
//     <div className="flex min-h-screen flex-col">
//       {/* Hero Section */}
//       <section className="relative">
//         <div className="absolute inset-0 bg-black/60 z-10" />
//         <div className="relative h-[400px] w-full">
//           <Image src="/images/banner.jpg" alt="DMT Acres Gallery" fill className="object-cover" />
//         </div>
//         <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
//           <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Photo & Video Gallery</h1>
//           <p className="mx-auto max-w-[700px] mt-4 text-lg text-gray-200">
//             A visual showcase of our farming life and operations
//           </p>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-16">
//         <div className="container">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {galleryItems.map((item, index) => (
//               <div key={index} className="group relative overflow-hidden rounded-lg">
//                 <div className="relative h-64 w-full">
//                   {item.type === "image" ? (
                    
//                     <Image
//                       src={item.src}
//                       alt={item.alt}
//                       fill
//                       className="object-cover cursor-pointer transition-transform group-hover:scale-105"
//                       onClick={() => openModal(item)}
//                     />
//                   ) : (
//                     <video
//                       src={item.src}
//                       className="h-full w-full object-cover cursor-pointer"
//                       muted
//                       playsInline
//                       preload="none"
//                       poster="/videos/thumbnail.jpeg"
//                       onClick={() => openModal(item)} // Triggers modal
//                     />
//                   )}
//                 </div>
//                 <div
//                     onClick={() => setSelectedItem(item)}
//                     className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 cursor-pointer"
//                   >
//                   <p className="font-semibold text-lg">{item.alt}</p>
//                   <span className="text-sm bg-green-700 px-2 py-1 rounded-full mt-2">{item.category}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedItem && (
//         <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
//           <div className="relative max-w-3xl w-full p-4 bg-white rounded-lg shadow-lg">
//             {/* Next and Previous Buttons */}
//             <button
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full"
//               onClick={prevItem}
//             >
//               &#8249;
//             </button>
//             <button
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full"
//               onClick={nextItem}
//             >
//               &#8250;
//             </button>

//             <button
//               className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full"
//               onClick={closeModal}
//             >
//               X
//             </button>

//             {/* Modal Content */}
//             <div className="flex justify-center items-center">
//               {selectedItem.type === "image" ? (
//                 <Image
//                   src={selectedItem.src}
//                   alt={selectedItem.alt}
//                   width={800}
//                   height={600}
//                   className="object-cover"
//                 />
//               ) : (
//                 <video
//                   src={selectedItem.src}
//                   controls
//                   muted
//                   playsInline
//                   preload="metadata"
//                   className="max-w-full h-auto"
//                 />
//               )}
//             </div>

//             <div className="text-center mt-4">
//               <p className="text-xl font-semibold">{selectedItem.alt}</p>
//               <p className="text-sm text-gray-500">{selectedItem.category}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
