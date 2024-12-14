'use client';

import React from "react";
import { useCart } from "../context/CartContext";
import { Typography, Button, InputNumber, Table, Space } from "antd";

const { Title, Paragraph } = Typography;

const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, calculateTotal } = useCart();

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (_: any, record: any) => (
        <Space>
          <img
            src={record.image}
            alt={record.name}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div>
            <Title level={5}>{record.name}</Title>
            <Paragraph>${record.price.toFixed(2)}</Paragraph>
          </div>
        </Space>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (_: any, record: any) => (
        <InputNumber
          min={1}
          value={record.quantity}
          onChange={(value) => updateQuantity(record.id, value || 1)}
        />
      ),
    },
    {
      title: "Subtotal",
      key: "subtotal",
      render: (_: any, record: any) => (
        <Paragraph>${(record.price * record.quantity).toFixed(2)}</Paragraph>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button
          type="link"
          danger
          onClick={() => removeFromCart(record.id)}
        >
          Remove
        </Button>
      ),
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-100">
      <Title level={2} className="text-center mb-8">
        Your Cart
      </Title>

      {cart.length === 0 ? (
        <div className="text-center">
          <Paragraph>Your cart is currently empty.</Paragraph>
          <Button type="primary" href="/store">
            Back to Store
          </Button>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto space-y-8">
          <Table
            dataSource={cart}
            columns={columns}
            rowKey="id"
            pagination={false}
            bordered
          />

          <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
            <div>
              <Title level={4}>Total:</Title>
              <Paragraph className="text-lg font-semibold">
                ${calculateTotal().toFixed(2)}
              </Paragraph>
            </div>
            <Button type="primary" size="large">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;