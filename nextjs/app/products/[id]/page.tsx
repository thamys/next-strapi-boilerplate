'use client';

import React, { useState } from "react";
import { Typography, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const product = {
  id: 1,
  name: "Karate Gi (Uniform)",
  description: "High-quality karate uniform, available in multiple sizes.",
  price: 50.0,
  image: "/images/products/karate-gi.jpg",
};

const ProductDetailPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(`${product.name} added to cart!`);
  };

  return (
    <div className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagem do Produto */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Informações do Produto */}
        <div className="flex flex-col justify-between">
          <div>
            <Title level={2}>{product.name}</Title>
            <Paragraph className="text-gray-600 text-lg">{product.description}</Paragraph>
            <Title level={4} className="mt-4">
              ${product.price.toFixed(2)}
            </Title>
          </div>

          {/* Botão de Ação */}
          <div className="mt-6">
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              size="large"
              onClick={addToCart}
              className="w-full"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;