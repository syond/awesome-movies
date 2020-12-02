import React from 'react';

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Main from "../../components/Main";

const Home: React.FC = () => {
  return (
    <Layout>
        <Header />
        <Navbar />
        <Main />
    </Layout>
  );
}

export default Home;