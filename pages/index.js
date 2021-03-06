import Head from 'next/head'
import React from 'react'
import axios from 'axios';
import env from "../config";
import Centers from '../components/center/Centers';
import Navbar from '../components/Navbar';
import Search from '../components/search/Search';

export default function Home(props) {
  return (
    <React.Fragment>
      {/* Head section */}
      <Head>
        <title>Skin Laundry</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar */}
      <Navbar />
      {/* List of centers */}
      <div className="container">
        <Search />
        <div className="mt-2">
          <Centers centers={props.centers} />
        </div>
      </div>
    </React.Fragment>
  );
}

/**
 * @desc Get list of centers
 */
export async function getStaticProps() {
  const response = await axios.get(`${env.api}/centers`, {
    headers: {
      Authorization:
        'bearer ' + env.token
    },
  });

  return {
    props: {
      centers: response.data.centers.map((center) => ({
        id: center.id,
        name: center.name,
        code: center.code,
        display_name: center.display_name,
      }))
    },
    revalidate: 10
  }
}
