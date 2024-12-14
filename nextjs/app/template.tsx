"use client";
import React, { PropsWithChildren } from "react";
import { Layout } from "antd";
import Footer from "./components/Footer";
import SiteHeader from "./components/Header";

const { Content } = Layout;

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="h-full min-h-screen">
      <SiteHeader />
      <Content className="h-full flex flex-1 flex-col justify-start items-center gap-8">
        {children}
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
