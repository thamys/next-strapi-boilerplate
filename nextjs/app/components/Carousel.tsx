"use client";
import React from "react";
import { Button, Carousel, theme, Typography } from "antd";

const HomeCarousel: React.FC = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const content: {
    title: string;
    description: string;
    cta: React.ReactNode;
  }[] = [
    {
      title: "Unleash Your Potential with Karate",
      description:
        "Join our dojo to master the art of self-discipline, strength, and respect.",
      cta: <Button>Learn More About Us</Button>,
    },
    {
      title: "Classes for All Ages and Levels",
      description:
        "From beginners to advanced practitioners, we have the perfect class for you.",
      cta: <Button>View Class Schedules</Button>,
    },
    {
      title: "Get Ready for Training",
      description:
        "Explore our store for high-quality karate uniforms, belts, and accessories.",
      cta: <Button>Shop Now</Button>,
    },
  ];

  return (
    <div className="block w-full">
      <Carousel
        autoplay
        style={{
          backgroundColor: colorPrimary,
        }}
      >
        {content.map((item, index) => (
          <div
            key={index}
            className="h-72 !flex flex-col !justify-center !items-center w-full pt-10 pb-12"
          >
            <div className="w-full max-w-lg">
              <Typography.Title className="!text-white" level={1}>
                {item.title}
              </Typography.Title>
              <Typography.Paragraph className="!text-white">
                {item.description}
              </Typography.Paragraph>
              {item.cta}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
