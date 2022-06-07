import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs aria-label="icon tabs example" value={value} onChange={handleChange}>
      <Tab
        to="/"
        component={Link}
        icon={<NewspaperOutlinedIcon />}
        aria-label="news"
      />

      <Tab
        to="/message"
        component={Link}
        icon={<EmailOutlinedIcon />}
        aria-label="message"
      />

      <Tab
        to="/profile"
        component={Link}
        icon={<PersonPinIcon />}
        aria-label="person"
      />
    </Tabs>
  );
}
