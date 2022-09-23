import { SideNavBar } from "../../components/sideNavbar";
import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { Timeline } from "../../components/timeline";
import { FeatureSidebar } from "../../components/featureSidebar";

export const Homepage = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr 1fr",
        md: "2fr 4fr 2fr",
      }}
      gridTemplateRows={{
        base: "auto",
        // md: "40px 100px 200px 50px",
      }}
      gridTemplateAreas={{
        // base: ` 'leftcard rightcard' 'map map' 'leftscrollcard rightscrollcard'`,
        md: ` 'sidenavbar timeline featureSidebar'`,
      }}
      gap={4}
    >
      <Box gridArea="sidenavbar" bg="green.500">
        <SideNavBar />
      </Box>
      <Box gridArea="timeline" bg="red.500">
        rightcard
      </Box>
      <Box gridArea="featureSidebar" bg="yellow.500">
        <SideNavBar />
      </Box>
    </Grid>
  );
};
