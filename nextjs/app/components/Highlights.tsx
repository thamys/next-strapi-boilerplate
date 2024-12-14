import React from "react";
import { Card } from "antd";
import { SafetyCertificateOutlined, HeartOutlined, ReadOutlined, TrophyOutlined, EnvironmentOutlined } from "@ant-design/icons";

type Highlight = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const dojoHighlights: Highlight[] = [
  {
    id: 1,
    title: "Certified Instructors",
    description: "Learn from skilled professionals with years of teaching experience.",
    icon: <SafetyCertificateOutlined />,
  },
  {
    id: 2,
    title: "Top-Notch Facilities",
    description: "Train in a clean, safe, and fully equipped environment.",
    icon: <HeartOutlined />,
  },
  {
    id: 3,
    title: "Rich Karate Tradition",
    description: "We honor the values of discipline, respect, and perseverance.",
    icon: <ReadOutlined />,
  },
  {
    id: 4,
    title: "Proven Track Record",
    description: "Our students excel in competitions and personal growth.",
    icon: <TrophyOutlined />,
  },
  {
    id: 5,
    title: "Convenient Location",
    description: "Easily accessible dojo in the heart of the community.",
    icon: <EnvironmentOutlined />,
  },
];
const HighlightsSection: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Why Choose Our Dojo?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {dojoHighlights.map((highlight) => (
          <div
            key={highlight.id}
            className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-blue-500 text-5xl mb-4">{highlight.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">{highlight.title}</h3>
            <p className="mt-2 text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsSection;