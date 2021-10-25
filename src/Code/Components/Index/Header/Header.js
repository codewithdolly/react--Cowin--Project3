import React, {useState} from "react";
import "../Index.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import Logo from "../../Images/logo.png";

const Header = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="header sticky">
        <div>
          <img src={Logo} alt="Covin logo" />
        </div>
        <div>
          {" "}
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="white"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="VACCINATION SERVICES" />
            <Tab value="two" label="PLATFORMS" />
            <Tab value="three" label="RESOURCES" />
            <Tab value="four" label="SUPPORT" />
          </Tabs>
        </div>

        <div>
          <Button id="signIn" variant="outlined">
            Register / Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
