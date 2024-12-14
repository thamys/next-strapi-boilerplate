'use client';
import React from "react";
import { Card, Avatar, Typography } from "antd";

const { Title, Paragraph } = Typography;

type Instructor = {
  id: number;
  name: string;
  title: string;
  photo: string;
};

const instructors: Instructor[] = [
  {
    id: 1,
    name: "John Doe",
    title: "Head Instructor",
    photo: "/images/instructors/john-doe.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Assistant Instructor",
    photo: "/images/instructors/jane-smith.jpg",
  },
];

const InstructorsSection: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <Title level={2} className="text-center mb-8">
        Our Instructors
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {instructors.map((instructor) => (
          <Card key={instructor.id} className="text-center shadow-md">
            <Avatar src={instructor.photo} size={100} className="mx-auto mb-4" />
            <Title level={4}>{instructor.name}</Title>
            <Paragraph type="secondary">{instructor.title}</Paragraph>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InstructorsSection;