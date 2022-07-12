import React from "react";
import axios from "axios";
import Navbar from "../../../components/Navbar";
import env from "../../../config";
import Services from "../../../components/service/Services";

/**
 * Display center details
 * @param {*} props 
 * @returns 
 */
function CenterDetails(props) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Services services={props.services} center={props.center} />
      </div>
    </React.Fragment>
  );
}

/**
 * Get all possible paths
 * @returns paths
 */
export async function getStaticPaths() {
  try {
    const response = await axios.get(`${env.api}/centers`, {
      headers: {
        Authorization:
          'bearer ' + env.token
      },
    });

    return {
      fallback: "blocking",
      // paths: [
      //   { params: { id: "2e70224d-a868-47a6-8e56-ff30e5b3668c" } },
      // ]
      paths: response.data.centers.map((center) => ({ params: { id: center.id } }))
    }
  } catch (error) {
    console.log(`Error while fetching paths: ${error}`)
  }
}

/**
 * Get center details
 * @param {*} context 
 * @returns center details
 */
export async function getStaticProps(context) {
  try {
    const id = context.params.id;
    const centerRes = await axios.get(`${env.api}/Centers/${id}`, {
      headers: {
        Authorization:
          'bearer ' + env.token
      },
    });

    const servicesRes = await axios.get(`${env.api}/Centers/${id}/services?expand=additional_info&expand=catalog_info&expand=categoryid&expand=variants_info&expand=add_ons_info&expand=image_paths`, {
      headers: {
        Authorization:
          'bearer ' + env.token
      },
    });

    return {
      props: {
        center: centerRes.data.center,
        services: servicesRes.data.services
      }
    }
  } catch (error) {
    console.log(`Error while fetch center details: ${error}`)
  }
}

export default CenterDetails;