'use client';
import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const ValuesSection: React.FC = () => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <Title level={2} className="text-center mb-6">
        Our Mission & Values
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Title level={3} className="text-gray-700">
            Mission
          </Title>
          <Paragraph>
            To inspire individuals through the art of karate, promoting discipline, respect, and personal growth.
          </Paragraph>
        </div>
        <div>
          <Title level={3} className="text-gray-700">
            Core Values
          </Title>
          <Paragraph>
            <ul className="list-disc list-inside">
              <li>Respect</li>
              <li>Discipline</li>
              <li>Perseverance</li>
              <li>Community</li>
            </ul>
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;