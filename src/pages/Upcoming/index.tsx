import React from 'react';

import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Input from '../../components/Input';
import Main from "../../components/Main";
import UpcomingMovie from '../../components/UpcomingMovie';

const Upcoming: React.FC = () => {
  return (
    <Layout>
        <Header />
        <Navbar />
        {/* <Input /> */}
        <Main>
          <UpcomingMovie />
        </Main>
    </Layout>
  );
}

export default Upcoming;