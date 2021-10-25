import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.scss";
import Footer from "../../Index/Footer/Footer";

const GetMethod = () => {
  const [post, setPost] = useState([]);
  const hospitalAPI =
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=581&date=31-03-2021";

  useEffect(() => {
    axios
      .get(
        hospitalAPI
      )
      .then((res) => {
        console.log(res.data);

        setPost(res.data.sessions);
      })
      .catch((error) => {
        console.log();
      });
  }, []);
  return (
    <div>
      <h1 id="hospital"> Hospital Where You Can Take Vaccine🏥</h1>
      {post.map((obj) => {
        return (
          <div>
            <div id="hospitalDetails">
              <h2>
                <u>{obj.name} </u>
              </h2>
              <p>
                <b>Address: </b> {obj.address}, {obj.state_name}.
              </p>
              <p>
                <b>Time: </b> {obj.from} to {obj.to}
              </p>
              <p>
                <b>Age: </b> {obj.lat} - {obj.long}
              </p>
              <p>
                <b>vaccine Type: </b> {obj.vaccine}
              </p>
              <p>
                <b>Fee: </b> {obj.fee_type}, ₹{obj.fee}
              </p>
              <p>
                <b>Total Dose: </b> {obj.available_capacity}
              </p>
              <p>
                <b>Dose1: </b> {obj.available_capacity_dose1}{" "}
              </p>
              <p>
                <b>Dose2: </b> {obj.available_capacity_dose2}
              </p>
              <p>
                <b>Min age limit: </b> {obj.min_age_limit}
              </p>
              <p>
                <b>Center ID: </b> {obj.center_id}
              </p>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
};
export default GetMethod;
