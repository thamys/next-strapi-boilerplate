"use client";
import React from "react";
import { Layout, Menu, Badge, theme } from "antd";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import Image from "next/image";
import { useCart } from "../context/CartContext"; // Certifique-se de ajustar o caminho para o contexto
import { usePathname } from "next/navigation"; // Para obter a URL atual

const { Header } = Layout;

const items: ItemType<MenuItemType>[] = [
  {
    key: "/",
    title: "Home",
    label: <Link href="/">Home</Link>,
  },
  {
    key: "/about",
    title: "About",
    label: <Link href="/about">About</Link>,
  },
  {
    key: "/products",
    title: "Store",
    label: <Link href="/products">Store</Link>,
  },
  {
    key: "/contact",
    title: "Contact",
    label: <Link href="/contact">Contact</Link>,
  },
];

const SiteHeader = () => {
  const {
    token: { colorBgBase, colorPrimary },
  } = theme.useToken();

  const { cart } = useCart(); // Usando o contexto para obter os itens do carrinho
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0); // Soma a quantidade de itens

  const pathname = usePathname(); // Obtém a URL atual

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colorBgBase,
        padding: "0 16px",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          className="mr-4"
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
        />
      </div>

      {/* Menu */}
      <Menu
        mode="horizontal"
        selectedKeys={[pathname]} // Define o item ativo com base na URL
        items={items}
        style={{ flex: 1, minWidth: 0, backgroundColor: colorBgBase }}
      />

      {/* Carrinho */}
      <Link href="/cart">
        <Badge count={cartQuantity} size="small" showZero>
          <ShoppingCartOutlined
            style={{ fontSize: "24px", color: colorPrimary }}
          />
        </Badge>
      </Link>
    </Header>
  );
};

export default SiteHeader;