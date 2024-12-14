"use client";

import React from "react";
import { Card, Button, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { products } from "./products";
import { useCart } from "../context/CartContext"; // Importa o contexto do carrinho

const { Title, Paragraph } = Typography;

const ShopPage: React.FC = () => {
  const { addToCart } = useCart(); // Usa o contexto para gerenciar o carrinho

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
            cover={
              <img
                alt={product.name}
                src={product.image}
                className="h-64 object-cover"
              />
            }
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
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
