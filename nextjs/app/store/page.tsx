'use client';

import React, { useState } from "react";
import { Card, Button, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { products, Product } from "./products";

const { Title, Paragraph } = Typography;

const ShopPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="py-12 px-4 bg-gray-100">
      <Title level={2} className="text-center mb-8">
        Shop Our Products
      </Title>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <Card
            key={product.id}
            hoverable
            cover={<img alt={product.name} src={product.image} className="h-64 object-cover" />}
            className="shadow-md"
          >
            <Title level={4}>{product.name}</Title>
            <Paragraph>${product.price.toFixed(2)}</Paragraph>
            <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
              {product.description}
            </Paragraph>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              className="mt-4"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-12 max-w-6xl mx-auto">
        <Title level={3}>Your Cart</Title>
        {cart.length === 0 ? (
          <Paragraph>No items in the cart yet.</Paragraph>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg"
              >
                <div>
                  <Title level={5}>{item.name}</Title>
                  <Paragraph>${item.price.toFixed(2)}</Paragraph>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;