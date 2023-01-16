import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InputIcon from "@mui/icons-material/Input";
const fileInfoList = [
  {
    primary: "Dashboard",
    icon: <DashboardIcon color="info" />,
    event: () => {
      alert("test");
    }
  },
  {
    primary: "Converter",
    icon: <InputIcon color="info" />,
    event: () => {
      alert("test");
    }
  }
];
export const mainListItems = (
  <React.Fragment>
    {fileInfoList.map((item) => (
      <ListItemButton onClick={item.event}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText sx={{ color: "red" }} primary={item.primary} />
      </ListItemButton>
    ))}
  </React.Fragment>
);
