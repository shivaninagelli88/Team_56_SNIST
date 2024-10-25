// src/Gallery.js
import React from "react";

const images = [
  { id: 1, src: "https://picsum.photos/seed/picsum/200/300", alt: "Image 1" },
  { id: 2, src: "https://picsum.photos/200/300", alt: "Image 2" },
  { id: 3, src: "https://picsum.photos/200/300", alt: "Image 3" },
  { id: 4, src: "https://picsum.photos/seed/picsum/200/300", alt: "Image 4" },
  { id: 5, src: "https://picsum.photos/200/300", alt: "Image 5" },
  { id: 6, src: "https://picsum.photos/seed/picsum/200/300", alt: "Image 6" },
  { id: 1, src: "https://picsum.photos/200/300", alt: "Image 1" },
  { id: 2, src: "https://picsum.photos/200/300", alt: "Image 2" },
  { id: 3, src: "https://picsum.photos/seed/picsum/200/300", alt: "Image 3" },
  { id: 4, src: "https://picsum.photos/200/300", alt: "Image 4" },
  { id: 5, src: "https://picsum.photos/200/300", alt: "Image 5" },
  { id: 6, src: "https://picsum.photos/seed/picsum/200/300", alt: "Image 6" },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 p-4 ">
      {images.map((image) => (
        <div className="overflow-hidden rounded-lg shadow-lg " key={image.id}>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-fullhttps://picsum.photos/seed/picsum/200/300 object-cover "
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
