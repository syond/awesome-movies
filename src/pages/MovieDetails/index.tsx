import React from "react";

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Movie from "../../components/Movie";

import "./styles.css";

const MovieDetails: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Navbar />
      <Movie />
    </Layout>
  );
};

export default MovieDetails;
