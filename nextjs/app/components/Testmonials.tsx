import { Avatar, Card } from 'antd';
import React from 'react';

type Testimonial = {
  id: number;
  name: string;
  role?: string; // Optional (e.g., Parent, Student, etc.)
  photo?: string; // Optional URL for the person's photo
  comment: string;
};

const dojoTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Student",
    photo: "/images/testimonials/john-smith.jpg", // Replace with actual path or URL
    comment:
      "Training at this dojo has been a life-changing experience. The instructors are incredibly knowledgeable, and the sense of community is unmatched!",
  },
  {
    id: 2,
    name: "Laura Wilson",
    role: "Parent",
    photo: "/images/testimonials/laura-wilson.jpg",
    comment:
      "My son has gained so much confidence and discipline since joining the dojo. I can't thank the team enough for their dedication to the students.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Advanced Practitioner",
    photo: "/images/testimonials/michael-brown.jpg",
    comment:
      "This dojo truly honors the traditional values of karate while also fostering personal growth. Highly recommend for anyone seeking authentic training.",
  },
];

const Testmonials = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">What Our Students and Parents Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {dojoTestimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="shadow-lg rounded-lg"
            bordered={false}
          >
            <div className="flex flex-col items-center">
              <Avatar
                src={testimonial.photo}
                size={64}
                alt={testimonial.name}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">{testimonial.name}</h3>
              {testimonial.role && (
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              )}
              <p className="mt-4 text-center text-gray-600">"{testimonial.comment}"</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testmonials;