import React from "react";
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Footer as AntdFooter } from "antd/es/layout/layout";
import { Typography } from "antd";

const Footer: React.FC = () => {
  return (
    <AntdFooter className="w-full !bg-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4 flex justify-between gap-8">
        {/* Links úteis */}
        <div>
          <Typography.Title level={4} className="text-lg !text-white font-bold mb-4">Useful Links</Typography.Title>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-gray-300 hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#classes" className="text-gray-300 hover:text-white transition">
                Classes
              </a>
            </li>
            <li>
              <a href="#shop" className="text-gray-300 hover:text-white transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <Typography.Title level={4}  className="text-lg !text-white font-bold mb-4">Contact</Typography.Title>
          <p className="text-gray-300">123 Karate Street, Dojo City</p>
          <p className="text-gray-300">Email: info@karatedojo.com</p>
          <p className="text-gray-300">Phone: +123 456 7890</p>
        </div>

        {/* Redes sociais */}
        <div>
          <Typography.Title level={4}  className="text-lg !text-white font-bold mb-4">Follow Us</Typography.Title>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 text-xl">
              <FacebookOutlined />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 text-xl">
              <InstagramOutlined />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 text-xl">
              <YoutubeOutlined />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Karate Dojo. All rights reserved.
      </div>
    </AntdFooter>
  );
};

export default Footer;