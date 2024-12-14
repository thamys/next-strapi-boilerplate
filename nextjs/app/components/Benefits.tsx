import React from "react";
import { SmileOutlined, ThunderboltOutlined, SafetyCertificateOutlined, TrophyOutlined, TeamOutlined } from "@ant-design/icons";

type Benefit = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const dojoBenefits: Benefit[] = [
  {
    id: 1,
    title: "Boost Self-Confidence",
    description: "Karate helps you believe in yourself through skill mastery and personal growth.",
    icon: <SmileOutlined />,
  },
  {
    id: 2,
    title: "Improve Physical Health",
    description: "Regular training enhances strength, flexibility, and overall fitness.",
    icon: <ThunderboltOutlined />,
  },
  {
    id: 3,
    title: "Learn Self-Defense",
    description: "Acquire practical techniques to protect yourself and handle challenging situations.",
    icon: <SafetyCertificateOutlined />,
  },
  {
    id: 4,
    title: "Achieve Goals",
    description: "Progress through belts and competitions to reach milestones in your journey.",
    icon: <TrophyOutlined />,
  },
  {
    id: 5,
    title: "Join a Supportive Community",
    description: "Be part of a group that values mutual respect and teamwork.",
    icon: <TeamOutlined />,
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Benefits of Karate Training</h2>
      <div className="grid grid-flow-col auto-cols-auto justify-center items-stretch gap-8 px-4 max-w-6xl mx-auto">
        {dojoBenefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-red-500 text-5xl mb-4">{benefit.icon}</div>
            <h3 className="text-lg font-semibold text-gray-700">{benefit.title}</h3>
            <p className="mt-2 text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;