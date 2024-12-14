"use client";
import React, { PropsWithChildren } from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import Image from "next/image";
import Footer from "./components/Footer";

const { Header, Content } = Layout;

const items: ItemType<MenuItemType>[] | undefined = [
  {
    key: "1",
    title: "Home",
    label: <Link href="/">Home</Link>,
  },
  {
    key: "2",
    title: "About",
    label: <Link href="/about">About</Link>,
  },
  {
    key: "3",
    title: "Store",
    label: <Link href="/store">Store</Link>,
  },
  {
    key: "4",
    title: "Contact",
    label: <Link href="/contact">Contact</Link>,
  },
];

const App: React.FC<PropsWithChildren> = ({ children }) => {

  const { token: { colorBgBase }} = theme.useToken(); 

  return (
    <Layout className="h-full min-h-screen">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: colorBgBase,
        }}
      >
        <Image className="mr-4" src="/logo.png" alt="Logo" width={50} height={50} />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0, backgroundColor: colorBgBase }}
        />
      </Header>
      <Content className="h-full flex flex-1 flex-col justify-start items-center gap-8">{children}</Content>
      <Footer />
    </Layout>
  );
};

export default App;
