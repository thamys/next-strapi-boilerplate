'use client';

import React from "react";
import { Form, Input, Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ContactPage: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="py-12 px-4 bg-gray-100">
      <Title level={2} className="text-center mb-8">
        Contact Us
      </Title>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Formulário de Contato */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Title level={3} className="mb-4">
            Get in Touch
          </Title>
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            className="space-y-4"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea placeholder="Your Message" rows={5} />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="w-full">
              Send Message
            </Button>
          </Form>
        </div>

        {/* Mapa e Informações de Contato */}
        <div className="space-y-6">
          {/* Mapa */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1679307634586!2d-122.41941568468114!3d37.774929679759716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c47f839b%3A0x21b6a144f5b66a93!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635398174000!5m2!1sen!2sus"
              title="Dojo Location"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Informações de Contato */}
          <div>
            <Title level={3}>Our Location</Title>
            <Paragraph>
              <strong>Address:</strong> 123 Karate St, Dojo City, CA
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> info@karatedojo.com
            </Paragraph>
            <Paragraph>
              <strong>Phone:</strong> +123 456 7890
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;