'use client';
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const HistorySection: React.FC = () => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <Title level={2} className="text-center mb-6">
        Our Story
      </Title>
      <Paragraph className="text-lg leading-relaxed text-gray-600">
        [Dojo Name] was founded in [Year] with the mission of spreading the art of karate and its core values. Over the years, our dojo has trained
        hundreds of students, fostering discipline, respect, and self-confidence. Whether you’re a beginner or an experienced practitioner, we welcome
        you to join our journey.
      </Paragraph>
    </div>
  );
};

export default HistorySection;