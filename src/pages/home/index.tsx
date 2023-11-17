import React from "react";
import ProductCard from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { ToastContainer } from "react-toastify";

import Footer from "@/components/Footer";
import styled from "styled-components";
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 15%;
`;

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Content>
        <ProductCard />
      </Content>
      <Footer />
    </>
  );
};

export default Home;
