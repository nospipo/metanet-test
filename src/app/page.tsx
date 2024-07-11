"use client";

import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import MetanetTestOne from "@/components/metanet-test-one";
import MetanetTestTwo from "@/components/metanet-test-two";
import MetanetTestThree from "@/components/metanet-test-three";
import MetanetTestFour from "@/components/metanet-test-four";
import MetanetTestFive from "@/components/metanet-test-five";
import MetanetTestFivePartTwo from "@/components/metanet-test-five-part-two";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      height={100}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <Typography variant="h4" component="h4">
        Metanet Test (Logic) : Boonyarith Kluebpoung
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Test No.1" {...a11yProps(0)} />
          <Tab label="Test No.2" {...a11yProps(1)} />
          <Tab label="Test No.3" {...a11yProps(2)} />
          <Tab label="Test No.4" {...a11yProps(3)} />
          <Tab label="Test No.5.1" {...a11yProps(4)} />
          <Tab label="Test No.5.2" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MetanetTestOne />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MetanetTestTwo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <MetanetTestThree />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <MetanetTestFour />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <MetanetTestFive />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <MetanetTestFivePartTwo />
      </CustomTabPanel>
    </Box>
  );
}

