import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.scss";
import Footer from "../../Index/Footer/Footer";
import { Button } from "@mui/material";

function PostMethod() {
  const hospitalAPI =
    "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=581&date=23-10-2021";
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(hospitalAPI)
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
      <h1 id="hospital">
        {" "}
        Adding Hospital (Post Method) <br />
        --------------------------------------
      </h1>
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
                <b>vaccine Type: </b> {obj.vaccine}
              </p>
              <p>
                <b>Fee: </b> {obj.fee_type}, ₹{obj.fee}
              </p>
              <p>
                <b>Total Doses: </b> {obj.available_capacity}
              </p>
              <p></p>
            </div>
          </div>
        );
      })}
      <Button variant="contained" color="success" sx={{ m: 5 }}>
        Create Post
      </Button>
      <Footer />
    </div>
  );
}
export default PostMethod;
