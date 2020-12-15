import React from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Input from '../../components/Input';
import Main from "../../components/Main";
import Movie from "../../components/Movie";

const MovieDetails: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Navbar />
      {/* <Input /> */}
      <Main>
        <Movie />
      </Main>
    </Layout>
  );
};

export default MovieDetails;
