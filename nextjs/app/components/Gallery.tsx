'use client';
import React from "react";
import { Typography, Image } from "antd";

const { Title } = Typography;

const galleryItems = [
  { id: 1, type: "photo", src: "/images/gallery/photo1.jpg" },
  { id: 2, type: "photo", src: "/images/gallery/photo2.jpg" },
  { id: 3, type: "photo", src: "/images/gallery/photo3.jpg" },
  { id: 4, type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 5, type: "video", src: "https://www.youtube.com/embed/oHg5SJYRHA0" },
];

const GallerySection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <Title level={2} className="text-center mb-8">
        Gallery & Study Videos
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {galleryItems.map((item) =>
          item.type === "photo" ? (
            <Image key={item.id} src={item.src} className="rounded-lg shadow-md" />
          ) : (
            <div
              key={item.id}
              className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md"
            >
              <iframe
                src={item.src}
                title={`Video ${item.id}`}
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GallerySection;