'use client';
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 text-center">
      <Title level={1} className="mb-4">
        Welcome to Karate Dojo
      </Title>
      <Paragraph className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover the rich tradition of karate and join a community dedicated to discipline, respect, and growth.
      </Paragraph>
    </div>
  );
};

export default HeroSection;